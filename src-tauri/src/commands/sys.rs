use serde::{Deserialize, Serialize};

#[derive(Debug, Serialize, Deserialize)]
pub struct HealthStatus {
    pub connected: bool,
    pub url: String,
    pub error: Option<String>,
}

#[tauri::command]
pub async fn server_health(url: Option<String>) -> Result<HealthStatus, String> {
    let server_url = url.unwrap_or_else(|| "http://localhost:11434".to_string());
    let health_url = format!("{}/api/tags", server_url);
    
    let client = reqwest::Client::builder()
        .timeout(std::time::Duration::from_secs(5))
        .build()
        .map_err(|e| e.to_string())?;
    
    match client.get(&health_url).send().await {
        Ok(response) => {
            if response.status().is_success() {
                Ok(HealthStatus {
                    connected: true,
                    url: server_url,
                    error: None,
                })
            } else {
                Ok(HealthStatus {
                    connected: false,
                    url: server_url,
                    error: Some(format!("Server returned status: {}", response.status())),
                })
            }
        }
        Err(e) => Ok(HealthStatus {
            connected: false,
            url: server_url,
            error: Some(e.to_string()),
        }),
    }
}