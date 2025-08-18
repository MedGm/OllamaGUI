import { useState, useEffect } from 'react'
import { invoke } from '@tauri-apps/api/core'

interface HealthStatus {
  connected: boolean
  url: string
  error?: string
}

export function useOllamaHealth(serverUrl?: string) {
  const [health, setHealth] = useState<HealthStatus>({
    connected: false,
    url: serverUrl || 'http://localhost:11434',
  })
  const [isLoading, setIsLoading] = useState(true)

  const checkHealth = async () => {
    setIsLoading(true)
    try {
      const result = await invoke<HealthStatus>('server_health', {
        url: serverUrl
      })
      setHealth(result)
    } catch (error) {
      setHealth({
        connected: false,
        url: serverUrl || 'http://localhost:11434',
        error: String(error),
      })
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    checkHealth()
    
    // Check health every 30 seconds
    const interval = setInterval(checkHealth, 30000)
    
    return () => clearInterval(interval)
  }, [serverUrl])

  return { health, isLoading, checkHealth }
}
