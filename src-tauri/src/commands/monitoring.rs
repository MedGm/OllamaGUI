use tauri::{AppHandle, Emitter};
use serde::{Deserialize, Serialize};
use std::sync::atomic::{AtomicBool, Ordering};
use std::time::{Duration, SystemTime, UNIX_EPOCH};
use tokio::time;
use sysinfo::System;

// System metrics structure
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct SystemMetrics {
    pub cpu_usage: f32,
    pub memory_usage: u64,
    pub memory_total: u64,
    pub disk_usage: u64,
    pub disk_total: u64,
    pub network_rx: u64,
    pub network_tx: u64,
    pub timestamp: u64,
}

// Model performance metrics
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct ModelMetrics {
    pub model_name: String,
    pub token_rate: f32,
    pub response_time: u64,
    pub memory_usage: u64,
    pub active_connections: u32,
    pub total_requests: u64,
    pub error_rate: f32,
    pub timestamp: u64,
}

// Ollama server status
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct OllamaStatus {
    pub version: String,
    pub uptime: u64,
    pub models_loaded: Vec<String>,
    pub active_streams: u32,
    pub queue_length: u32,
    pub server_health: String,
    pub last_health_check: u64,
}

// Global monitoring state
static MONITORING_ACTIVE: AtomicBool = AtomicBool::new(false);

// Start system monitoring
// Accept both snake_case (interval_ms) and camelCase (intervalMs) for convenience
#[tauri::command]
pub async fn start_system_monitoring(
    app: AppHandle,
    interval_ms: Option<u64>,
    #[allow(non_snake_case)] intervalMs: Option<u64>,
) -> Result<(), String> {
    if MONITORING_ACTIVE.load(Ordering::Relaxed) {
        return Ok(()); // Already monitoring
    }
    
    MONITORING_ACTIVE.store(true, Ordering::Relaxed);
    // Determine the interval from provided args, default to 2000ms
    let chosen_interval = interval_ms.or(intervalMs).unwrap_or(2000);
    
    // Spawn monitoring task
    tokio::spawn(async move {
        let mut system = System::new_all();
        let mut interval = time::interval(Duration::from_millis(chosen_interval));
        
        while MONITORING_ACTIVE.load(Ordering::Relaxed) {
            interval.tick().await;
            
            // Refresh system information
            system.refresh_all();
            
            // Collect system metrics
            let metrics = collect_system_metrics(&system);
            
            // Emit system metrics event
            if let Err(e) = app.emit("monitoring:system-metrics", &metrics) {
                eprintln!("Failed to emit system metrics: {}", e);
            }
            
            // Collect Ollama status
            if let Ok(ollama_status) = collect_ollama_status().await {
                if let Err(e) = app.emit("monitoring:ollama-status", &ollama_status) {
                    eprintln!("Failed to emit Ollama status: {}", e);
                }
            }
        }
        
        println!("📊 System monitoring stopped");
    });
    
    println!("📊 System monitoring started with {}ms interval", chosen_interval);
    Ok(())
}

// Stop system monitoring
#[tauri::command]
pub async fn stop_system_monitoring() -> Result<(), String> {
    MONITORING_ACTIVE.store(false, Ordering::Relaxed);
    Ok(())
}

// Get current system metrics
#[tauri::command]
pub async fn get_system_metrics() -> Result<SystemMetrics, String> {
    let mut system = System::new_all();
    system.refresh_all();
    Ok(collect_system_metrics(&system))
}

// Get model performance metrics
#[tauri::command]
pub async fn get_model_metrics(model_name: Option<String>) -> Result<Vec<ModelMetrics>, String> {
    // This would typically query a database or monitoring system
    // For now, return mock data for demonstration
    let timestamp = SystemTime::now()
        .duration_since(UNIX_EPOCH)
        .unwrap()
        .as_secs();
    
    let models = if let Some(name) = model_name {
        vec![name]
    } else {
        vec!["llama3:8b".to_string(), "codellama:7b".to_string()]
    };
    
    let metrics: Vec<ModelMetrics> = models
        .into_iter()
        .map(|name| ModelMetrics {
            model_name: name,
            token_rate: 45.2 + (rand::random::<f32>() * 10.0),
            response_time: 150 + (rand::random::<u64>() % 100),
            memory_usage: 2_000_000_000 + (rand::random::<u64>() % 500_000_000),
            active_connections: rand::random::<u32>() % 10,
            total_requests: rand::random::<u64>() % 1000,
            error_rate: rand::random::<f32>() * 0.05,
            timestamp,
        })
        .collect();
    
    Ok(metrics)
}

// Get Ollama server status
#[tauri::command]
pub async fn get_ollama_status() -> Result<OllamaStatus, String> {
    collect_ollama_status().await
}

// Helper function to collect system metrics
fn collect_system_metrics(system: &System) -> SystemMetrics {
    let timestamp = SystemTime::now()
        .duration_since(UNIX_EPOCH)
        .unwrap()
        .as_secs();
    
    // CPU usage (average across all cores)
    let cpu_usage = system.cpus().iter().map(|cpu| cpu.cpu_usage()).sum::<f32>() / system.cpus().len() as f32;
    
    // Memory usage (in bytes)
    let memory_usage = system.used_memory();
    let memory_total = system.total_memory();
    
    // For now, use mock disk and network data since sysinfo API may vary
    // In production, you'd implement proper disk and network monitoring
    let disk_usage = 50_000_000_000u64; // Mock 50GB used
    let disk_total = 500_000_000_000u64; // Mock 500GB total
    
    let network_rx = 1024u64; // Mock network data
    let network_tx = 512u64;
    
    SystemMetrics {
        cpu_usage,
        memory_usage,
        memory_total,
        disk_usage,
        disk_total,
        network_rx,
        network_tx,
        timestamp,
    }
}

// Helper function to collect Ollama status
async fn collect_ollama_status() -> Result<OllamaStatus, String> {
    let timestamp = SystemTime::now()
        .duration_since(UNIX_EPOCH)
        .unwrap()
        .as_secs();
    
    // Try to connect to Ollama API
    let client = reqwest::Client::new();
    
    // Check if Ollama is running
    match client.get("http://localhost:11434/api/version").send().await {
        Ok(response) => {
            let version_info: serde_json::Value = response.json().await.map_err(|e| e.to_string())?;
            let version = version_info["version"].as_str().unwrap_or("unknown").to_string();
            
            // Get loaded models
            let models_response = client.get("http://localhost:11434/api/tags").send().await;
            let models_loaded = if let Ok(resp) = models_response {
                let models_info: serde_json::Value = resp.json().await.unwrap_or_default();
                models_info["models"].as_array()
                    .unwrap_or(&vec![])
                    .iter()
                    .filter_map(|m| m["name"].as_str().map(|s| s.to_string()))
                    .collect()
            } else {
                vec![]
            };
            
            Ok(OllamaStatus {
                version,
                uptime: 3600, // Mock uptime - would need to track actual start time
                models_loaded,
                active_streams: 0, // Would need to track active streams
                queue_length: 0,   // Would need to track queue
                server_health: "healthy".to_string(),
                last_health_check: timestamp,
            })
        }
        Err(_) => {
            Ok(OllamaStatus {
                version: "unknown".to_string(),
                uptime: 0,
                models_loaded: vec![],
                active_streams: 0,
                queue_length: 0,
                server_health: "error".to_string(),
                last_health_check: timestamp,
            })
        }
    }
}

// Helper function to track model performance during chat operations
pub fn track_model_performance(
    app: &AppHandle,
    model_name: &str,
    token_rate: f32,
    response_time: u64,
    memory_usage: u64,
) {
    let timestamp = SystemTime::now()
        .duration_since(UNIX_EPOCH)
        .unwrap()
        .as_secs();
    
    let metrics = ModelMetrics {
        model_name: model_name.to_string(),
        token_rate,
        response_time,
        memory_usage,
        active_connections: 1,
        total_requests: 1, // Would increment from stored state
        error_rate: 0.0,
        timestamp,
    };
    
    if let Err(e) = app.emit("monitoring:model-metrics", &metrics) {
        eprintln!("Failed to emit model metrics: {}", e);
    }
}
