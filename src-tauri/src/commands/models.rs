use serde::{Deserialize, Serialize};
use tauri::Emitter;
use futures_util::StreamExt;

#[derive(Debug, Serialize, Deserialize)]
pub struct ModelDetails {
    pub format: String,
    pub family: String,
    pub families: Option<Vec<String>>,
    pub parameter_size: String,
    pub quantization_level: String,
}

#[derive(Debug, Serialize, Deserialize)]
pub struct OllamaModel {
    pub name: String,
    pub modified_at: String,
    pub size: i64,
    pub digest: String,
    pub details: Option<ModelDetails>,
}

#[derive(Debug, Serialize, Deserialize)]
pub struct ModelsResponse {
    pub models: Vec<OllamaModel>,
}

#[tauri::command]
pub async fn models_list(server_url: Option<String>) -> Result<ModelsResponse, String> {
    let url = server_url.unwrap_or_else(|| "http://localhost:11434".to_string());
    let endpoint = format!("{}/api/tags", url);
    
    let client = reqwest::Client::builder()
        .timeout(std::time::Duration::from_secs(10))
        .build()
        .map_err(|e| e.to_string())?;
    
    match client.get(&endpoint).send().await {
        Ok(response) => {
            if response.status().is_success() {
                match response.json::<ModelsResponse>().await {
                    Ok(models_response) => Ok(models_response),
                    Err(e) => Err(format!("Failed to parse models response: {}", e)),
                }
            } else {
                Err(format!("Server returned status: {}", response.status()))
            }
        }
        Err(e) => Err(format!("Failed to fetch models: {}", e)),
    }
}

#[derive(Debug, Serialize, Deserialize)]
pub struct SimpleResponse {
    pub success: bool,
    pub error: Option<String>,
}

#[tauri::command]
pub async fn model_delete(name: String, server_url: Option<String>) -> Result<SimpleResponse, String> {
    let url = server_url.unwrap_or_else(|| "http://localhost:11434".to_string());
    let endpoint = format!("{}/api/delete", url);

    let client = reqwest::Client::builder()
        .timeout(std::time::Duration::from_secs(60))
        .build()
        .map_err(|e| e.to_string())?;

    // Prefer DELETE with JSON body; if server rejects, fallback to POST
    let req_body = serde_json::json!({ "name": name });
    let resp = client
        .delete(&endpoint)
        .json(&req_body)
        .send()
        .await;

    let resp = match resp {
        Ok(r) if r.status().is_success() => r,
        Ok(r) if r.status() == reqwest::StatusCode::METHOD_NOT_ALLOWED => {
            client.post(&endpoint).json(&req_body).send().await.map_err(|e| e.to_string())?
        }
        Ok(r) => return Ok(SimpleResponse { success: false, error: Some(format!("HTTP error: {}", r.status())) }),
        Err(e) => return Ok(SimpleResponse { success: false, error: Some(format!("Request error: {}", e)) }),
    };

    if resp.status().is_success() {
        Ok(SimpleResponse { success: true, error: None })
    } else {
        Ok(SimpleResponse { success: false, error: Some(format!("HTTP error: {}", resp.status())) })
    }
}

#[derive(Debug, Serialize, Deserialize)]
pub struct ShowResponse {
    pub modelfile: Option<String>,
    pub parameters: Option<serde_json::Value>,
    pub template: Option<String>,
    pub license: Option<String>,
    #[serde(flatten)]
    pub extra: std::collections::HashMap<String, serde_json::Value>,
}

#[tauri::command]
pub async fn model_show(name: String, server_url: Option<String>) -> Result<ShowResponse, String> {
    let url = server_url.unwrap_or_else(|| "http://localhost:11434".to_string());
    let endpoint = format!("{}/api/show", url);

    let client = reqwest::Client::builder()
        .timeout(std::time::Duration::from_secs(30))
        .build()
        .map_err(|e| e.to_string())?;

    // Use POST body per Ollama API examples
    let resp = client
        .post(&endpoint)
        .json(&serde_json::json!({ "name": name }))
        .send()
        .await
        .map_err(|e| e.to_string())?;

    if !resp.status().is_success() {
        return Err(format!("HTTP error: {}", resp.status()));
    }

    resp.json::<ShowResponse>().await.map_err(|e| e.to_string())
}

#[derive(Debug, Serialize, Deserialize)]
pub struct PullStartPayload {
    pub pull_id: String,
    pub name: String,
}

#[tauri::command]
pub async fn model_pull(app: tauri::AppHandle, name: String, server_url: Option<String>) -> Result<SimpleResponse, String> {
    let url = server_url.unwrap_or_else(|| "http://localhost:11434".to_string());
    let endpoint = format!("{}/api/pull", url);

    let pull_id = uuid::Uuid::new_v4().to_string();

    let client = reqwest::Client::builder()
        .timeout(std::time::Duration::from_secs(60 * 60)) // up to 1 hour
        .build()
        .map_err(|e| e.to_string())?;

    // notify frontend pull started
    let _ = app.emit("models:pull-start", &serde_json::json!({ "pull_id": pull_id, "name": name }));

    let response = client
        .post(&endpoint)
        .json(&serde_json::json!({ "name": name }))
        .send()
        .await
        .map_err(|e| e.to_string())?;

    if !response.status().is_success() {
        let _ = app.emit("models:pull-error", &serde_json::json!({ "pull_id": pull_id, "error": format!("HTTP error: {}", response.status()) }));
        return Ok(SimpleResponse { success: false, error: Some(format!("HTTP error: {}", response.status())) });
    }

    // Stream NDJSON progress
    let mut stream = response.bytes_stream();
    let mut buffer = String::new();

    while let Some(chunk) = stream.next().await {
        match chunk {
            Ok(bytes) => {
                let chunk_str = String::from_utf8_lossy(&bytes);
                buffer.push_str(&chunk_str);
                loop {
                    if let Some(pos) = buffer.find('\n') {
                        let line = buffer[..pos].trim().to_string();
                        buffer = buffer[pos + 1..].to_string();
                        if line.is_empty() { continue; }
                        // Forward raw JSON line as progress to UI
                        if let Ok(value) = serde_json::from_str::<serde_json::Value>(&line) {
                            let _ = app.emit("models:pull-progress", &serde_json::json!({
                                "pull_id": pull_id,
                                "progress": value
                            }));
                        } else {
                            let _ = app.emit("models:pull-progress", &serde_json::json!({
                                "pull_id": pull_id,
                                "progress": { "status": "parsing_error", "raw": line }
                            }));
                        }
                    } else {
                        break;
                    }
                }
            }
            Err(e) => {
                let _ = app.emit("models:pull-error", &serde_json::json!({ "pull_id": pull_id, "error": e.to_string() }));
                return Ok(SimpleResponse { success: false, error: Some(e.to_string()) });
            }
        }
    }

    // Any trailing buffered line
    if !buffer.trim().is_empty() {
        let line = buffer.trim();
        if let Ok(value) = serde_json::from_str::<serde_json::Value>(line) {
            let _ = app.emit("models:pull-progress", &serde_json::json!({
                "pull_id": pull_id,
                "progress": value
            }));
        }
    }

    let _ = app.emit("models:pull-complete", &serde_json::json!({ "pull_id": pull_id }));
    Ok(SimpleResponse { success: true, error: None })
}