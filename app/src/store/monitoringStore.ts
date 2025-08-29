import { create } from 'zustand'
import { invoke } from '@tauri-apps/api/core'
import { listen } from '@tauri-apps/api/event'

// Types for monitoring data
export interface SystemMetrics {
  cpuUsage: number
  memoryUsage: number
  memoryTotal: number
  diskUsage: number
  diskTotal: number
  networkRx: number
  networkTx: number
  timestamp: number
}

export interface ModelMetrics {
  modelName: string
  tokenRate: number // tokens per second
  responseTime: number // milliseconds
  memoryUsage: number // bytes
  activeConnections: number
  totalRequests: number
  errorRate: number
  timestamp: number
}

export interface OllamaStatus {
  version: string
  uptime: number
  modelsLoaded: string[]
  activeStreams: number
  queueLength: number
  serverHealth: 'healthy' | 'warning' | 'error'
  lastHealthCheck: number
}

interface MonitoringState {
  // System monitoring
  systemMetrics: SystemMetrics[]
  currentSystemMetrics: SystemMetrics | null
  
  // Model performance
  modelMetrics: ModelMetrics[]
  currentModelMetrics: Record<string, ModelMetrics>
  
  // Ollama status
  ollamaStatus: OllamaStatus | null
  
  // Monitoring controls
  isMonitoring: boolean
  monitoringInterval: number // milliseconds
  maxHistoryLength: number
  
  // Actions
  startMonitoring: () => Promise<void>
  stopMonitoring: () => Promise<void>
  setMonitoringInterval: (interval: number) => void
  clearHistory: () => void
  getSystemHealth: () => Promise<void>
  getModelPerformance: (modelName?: string) => Promise<void>
  getOllamaStatus: () => Promise<void>
}

export const useMonitoringStore = create<MonitoringState>((set, get) => ({
  // Helpers to normalize backend snake_case to frontend camelCase and coerce numbers
  // Keep these inside the factory to avoid top-level pollution
  _toNumber: (v: any, fallback = 0): number => {
    const n = typeof v === 'number' ? v : Number(v)
    return Number.isFinite(n) ? n : fallback
  },
  _normalizeSystemMetrics: (obj: any): SystemMetrics => {
    const toNum = (get() as any)._toNumber
    return {
      cpuUsage: toNum(obj?.cpu_usage ?? obj?.cpuUsage),
      memoryUsage: toNum(obj?.memory_usage ?? obj?.memoryUsage),
      memoryTotal: toNum(obj?.memory_total ?? obj?.memoryTotal),
      diskUsage: toNum(obj?.disk_usage ?? obj?.diskUsage),
      diskTotal: toNum(obj?.disk_total ?? obj?.diskTotal),
      networkRx: toNum(obj?.network_rx ?? obj?.networkRx),
      networkTx: toNum(obj?.network_tx ?? obj?.networkTx),
      timestamp: toNum(obj?.timestamp)
    }
  },
  _normalizeModelMetrics: (obj: any): ModelMetrics => {
    const toNum = (get() as any)._toNumber
    return {
      modelName: obj?.model_name ?? obj?.modelName ?? 'unknown',
      tokenRate: toNum(obj?.token_rate ?? obj?.tokenRate),
      responseTime: toNum(obj?.response_time ?? obj?.responseTime),
      memoryUsage: toNum(obj?.memory_usage ?? obj?.memoryUsage),
      activeConnections: toNum(obj?.active_connections ?? obj?.activeConnections),
      totalRequests: toNum(obj?.total_requests ?? obj?.totalRequests),
      errorRate: toNum(obj?.error_rate ?? obj?.errorRate),
      timestamp: toNum(obj?.timestamp)
    }
  },
  _normalizeOllamaStatus: (obj: any): OllamaStatus => {
    const toNum = (get() as any)._toNumber
    const models = Array.isArray(obj?.models_loaded ?? obj?.modelsLoaded)
      ? (obj?.models_loaded ?? obj?.modelsLoaded)
      : []
    return {
      version: String(obj?.version ?? 'unknown'),
      uptime: toNum(obj?.uptime),
      modelsLoaded: models.map((m: any) => String(m)),
      activeStreams: toNum(obj?.active_streams ?? obj?.activeStreams),
      queueLength: toNum(obj?.queue_length ?? obj?.queueLength),
      serverHealth: (obj?.server_health ?? obj?.serverHealth ?? 'error') as OllamaStatus['serverHealth'],
      lastHealthCheck: toNum(obj?.last_health_check ?? obj?.lastHealthCheck)
    }
  },

  // Initial state
  systemMetrics: [],
  currentSystemMetrics: null,
  modelMetrics: [],
  currentModelMetrics: {},
  ollamaStatus: null,
  isMonitoring: false,
  monitoringInterval: 2000, // 2 seconds
  maxHistoryLength: 100, // Keep last 100 data points
  
  // Start monitoring system and model metrics
  startMonitoring: async () => {
    const state = get()
    if (state.isMonitoring) return
    
    set({ isMonitoring: true })
    
    try {
      // Start system monitoring via Rust backend
      await invoke('start_system_monitoring', { 
        interval_ms: state.monitoringInterval 
      })
      
      // Listen for system metrics events
      const unlistenSystem = await listen('monitoring:system-metrics', (event: any) => {
        const raw = event.payload
        const metrics = (get() as any)._normalizeSystemMetrics(raw)
        set(state => ({
          currentSystemMetrics: metrics,
          systemMetrics: [...state.systemMetrics.slice(-state.maxHistoryLength + 1), metrics]
        }))
      })
      
      // Listen for model metrics events
      const unlistenModel = await listen('monitoring:model-metrics', (event: any) => {
        const raw = event.payload
        const metrics = (get() as any)._normalizeModelMetrics(raw)
        set(state => ({
          currentModelMetrics: {
            ...state.currentModelMetrics,
            [metrics.modelName]: metrics
          },
          modelMetrics: [...state.modelMetrics.slice(-state.maxHistoryLength + 1), metrics]
        }))
      })
      
      // Listen for Ollama status updates
      const unlistenStatus = await listen('monitoring:ollama-status', (event: any) => {
        const raw = event.payload
        const status = (get() as any)._normalizeOllamaStatus(raw)
        set({ ollamaStatus: status })
      })
      
      // Store cleanup functions globally for stopping
      ;(window as any).monitoringCleanup = {
        unlistenSystem,
        unlistenModel,
        unlistenStatus
      }
      
      console.log('📊 Monitoring started successfully')
    } catch (error) {
      console.error('Failed to start monitoring:', error)
      set({ isMonitoring: false })
    }
  },
  
  // Stop monitoring
  stopMonitoring: async () => {
    try {
      await invoke('stop_system_monitoring')
      
      // Clean up event listeners
      const cleanup = (window as any).monitoringCleanup
      if (cleanup) {
        cleanup.unlistenSystem?.()
        cleanup.unlistenModel?.()
        cleanup.unlistenStatus?.()
        delete (window as any).monitoringCleanup
      }
      
      set({ isMonitoring: false })
      console.log('📊 Monitoring stopped')
    } catch (error) {
      console.error('Failed to stop monitoring:', error)
    }
  },
  
  // Set monitoring interval
  setMonitoringInterval: (interval: number) => {
    set({ monitoringInterval: interval })
    
    // Restart monitoring with new interval if currently active
    const state = get()
    if (state.isMonitoring) {
      state.stopMonitoring().then(() => {
        state.startMonitoring()
      })
    }
  },
  
  // Clear monitoring history
  clearHistory: () => {
    set({
      systemMetrics: [],
      modelMetrics: [],
      currentModelMetrics: {}
    })
  },
  
  // Get current system health
  getSystemHealth: async () => {
    try {
  const raw = await invoke<any>('get_system_metrics')
  const metrics = (get() as any)._normalizeSystemMetrics(raw)
  set({ currentSystemMetrics: metrics })
    } catch (error) {
      console.error('Failed to get system health:', error)
    }
  },
  
  // Get model performance data
  getModelPerformance: async (modelName?: string) => {
    try {
      const raw = await invoke<any[]>('get_model_metrics', { 
        model_name: modelName 
      })
      const normalized: ModelMetrics[] = (raw || []).map((m: any) => (get() as any)._normalizeModelMetrics(m))
      const metricsMap: Record<string, ModelMetrics> = {}
      normalized.forEach(metric => { metricsMap[metric.modelName] = metric })

      set(state => ({
        currentModelMetrics: { ...state.currentModelMetrics, ...metricsMap },
        modelMetrics: [...state.modelMetrics, ...normalized].slice(-state.maxHistoryLength)
      }))
    } catch (error) {
      console.error('Failed to get model performance:', error)
    }
  },
  
  // Get Ollama server status
  getOllamaStatus: async () => {
    try {
  const raw = await invoke<any>('get_ollama_status')
  const status = (get() as any)._normalizeOllamaStatus(raw)
  set({ ollamaStatus: status })
    } catch (error) {
      console.error('Failed to get Ollama status:', error)
    }
  }
}))

// Auto-cleanup on page unload
if (typeof window !== 'undefined') {
  window.addEventListener('beforeunload', () => {
    const cleanup = (window as any).monitoringCleanup
    if (cleanup) {
      cleanup.unlistenSystem?.()
      cleanup.unlistenModel?.()
      cleanup.unlistenStatus?.()
    }
  })
}
