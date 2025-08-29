use serde::{Deserialize, Serialize};
use std::process::Command;

#[derive(Debug, Serialize, Deserialize)]
pub struct HealthStatus {
    pub connected: bool,
    pub url: String,
    pub error: Option<String>,
}

#[derive(Debug, Serialize, Deserialize)]
pub struct OllamaDetectionResult {
    pub installed: bool,
    pub version: Option<String>,
    pub service_running: bool,
    pub service_enabled: bool,
    pub installation_method: Option<String>, // "binary", "package", "snap", etc.
    pub binary_path: Option<String>,
    pub suggested_install_commands: Vec<String>,
}

#[derive(Debug, Serialize, Deserialize)]
pub struct ServiceActionResult {
    pub success: bool,
    pub message: String,
    pub service_running: bool,
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

#[tauri::command]
pub async fn detect_ollama() -> Result<OllamaDetectionResult, String> {
    let mut result = OllamaDetectionResult {
        installed: false,
        version: None,
        service_running: false,
        service_enabled: false,
        installation_method: None,
        binary_path: None,
        suggested_install_commands: Vec::new(),
    };
    
    // Check for Ollama binary in common locations
    let possible_paths = [
        "/usr/local/bin/ollama",
        "/usr/bin/ollama",
        "/opt/ollama/bin/ollama",
        "~/.local/bin/ollama",
    ];
    
    // Try to find Ollama binary using 'which' command
    if let Ok(output) = Command::new("which").arg("ollama").output() {
        if output.status.success() {
            let binary_path = String::from_utf8_lossy(&output.stdout).trim().to_string();
            result.installed = true;
            result.binary_path = Some(binary_path.clone());
            
            // Get version
            if let Ok(version_output) = Command::new(&binary_path).arg("--version").output() {
                if version_output.status.success() {
                    result.version = Some(String::from_utf8_lossy(&version_output.stdout).trim().to_string());
                }
            }
        }
    }
    
    // If not found with 'which', try direct paths
    if !result.installed {
        for path in &possible_paths {
            let expanded_path = if path.starts_with("~/") {
                format!("{}/{}", std::env::var("HOME").unwrap_or_default(), &path[2..])
            } else {
                path.to_string()
            };
            
            if std::path::Path::new(&expanded_path).exists() {
                result.installed = true;
                result.binary_path = Some(expanded_path.clone());
                
                // Get version
                if let Ok(version_output) = Command::new(&expanded_path).arg("--version").output() {
                    if version_output.status.success() {
                        result.version = Some(String::from_utf8_lossy(&version_output.stdout).trim().to_string());
                    }
                }
                break;
            }
        }
    }
    
    // Determine installation method
    if result.installed {
        // Check if installed via package manager
        if let Ok(_) = Command::new("dpkg").args(["-l", "ollama"]).output() {
            result.installation_method = Some("deb".to_string());
        } else if let Ok(_) = Command::new("rpm").args(["-q", "ollama"]).output() {
            result.installation_method = Some("rpm".to_string());
        } else if let Ok(_) = Command::new("snap").args(["list", "ollama"]).output() {
            result.installation_method = Some("snap".to_string());
        } else {
            result.installation_method = Some("binary".to_string());
        }
        
        // Check if service is running
        result.service_running = is_ollama_service_running().await;
        
        // Check if service is enabled (systemd)
        if let Ok(output) = Command::new("systemctl").args(["is-enabled", "ollama"]).output() {
            result.service_enabled = output.status.success();
        }
    }
    
    // Generate installation suggestions if not installed
    if !result.installed {
        result.suggested_install_commands = get_install_suggestions();
    }
    
    Ok(result)
}

#[tauri::command]
pub async fn start_ollama_service() -> Result<ServiceActionResult, String> {
    // Try different methods to start Ollama
    
    // Method 1: Try systemd service
    if let Ok(output) = Command::new("systemctl").args(["start", "ollama"]).output() {
        if output.status.success() {
            let running = is_ollama_service_running().await;
            return Ok(ServiceActionResult {
                success: true,
                message: "Ollama service started via systemd".to_string(),
                service_running: running,
            });
        }
    }
    
    // Method 2: Try to start manually in background
    if let Ok(_output) = Command::new("sh")
        .args(["-c", "nohup ollama serve > /dev/null 2>&1 &"])
        .output()
    {
        // Give it a moment to start
        tokio::time::sleep(tokio::time::Duration::from_secs(2)).await;
        let running = is_ollama_service_running().await;
        
        if running {
            return Ok(ServiceActionResult {
                success: true,
                message: "Ollama started manually in background".to_string(),
                service_running: true,
            });
        }
    }
    
    Ok(ServiceActionResult {
        success: false,
        message: "Failed to start Ollama service. Please check if Ollama is installed and try starting it manually with 'ollama serve'".to_string(),
        service_running: false,
    })
}

#[tauri::command]
pub async fn stop_ollama_service() -> Result<ServiceActionResult, String> {
    // Method 1: Try systemd service
    if let Ok(output) = Command::new("systemctl").args(["stop", "ollama"]).output() {
        if output.status.success() {
            return Ok(ServiceActionResult {
                success: true,
                message: "Ollama service stopped via systemd".to_string(),
                service_running: false,
            });
        }
    }
    
    // Method 2: Try to kill process
    if let Ok(output) = Command::new("pkill").args(["-f", "ollama serve"]).output() {
        if output.status.success() {
            return Ok(ServiceActionResult {
                success: true,
                message: "Ollama process terminated".to_string(),
                service_running: false,
            });
        }
    }
    
    Ok(ServiceActionResult {
        success: false,
        message: "Could not stop Ollama service. It may not be running or may require manual intervention".to_string(),
        service_running: is_ollama_service_running().await,
    })
}

// Helper functions
async fn is_ollama_service_running() -> bool {
    // Check if we can connect to Ollama API
    let client = reqwest::Client::builder()
        .timeout(std::time::Duration::from_secs(3))
        .build();
        
    if let Ok(client) = client {
        if let Ok(response) = client.get("http://localhost:11434/api/tags").send().await {
            return response.status().is_success();
        }
    }
    
    // Fallback: check process
    if let Ok(output) = Command::new("pgrep").args(["-f", "ollama serve"]).output() {
        return output.status.success() && !output.stdout.is_empty();
    }
    
    false
}

fn get_install_suggestions() -> Vec<String> {
    vec![
        // Official installation script
        "curl -fsSL https://ollama.com/install.sh | sh".to_string(),
        
        // Manual installation
        "# Manual installation:".to_string(),
        "curl -L https://ollama.com/download/ollama-linux-amd64 -o ollama".to_string(),
        "chmod +x ollama".to_string(),
        "sudo mv ollama /usr/local/bin/".to_string(),
        
        // Package managers (if available)
        "# Via package manager (if available):".to_string(),
        "# Check your distribution's package manager for 'ollama'".to_string(),
    ]
}