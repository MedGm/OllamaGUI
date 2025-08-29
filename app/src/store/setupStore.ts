import { create } from 'zustand'
import { invoke } from '@tauri-apps/api/core'

export interface OllamaDetectionResult {
  installed: boolean
  version?: string
  service_running: boolean
  service_enabled: boolean
  installation_method?: string
  binary_path?: string
  suggested_install_commands: string[]
}

export interface ServiceActionResult {
  success: boolean
  message: string
  service_running: boolean
}

interface SetupState {
  detection: OllamaDetectionResult | null
  isDetecting: boolean
  isSetupWizardOpen: boolean
  setupStep: 'detection' | 'installation' | 'service' | 'complete'
  serviceAction: 'idle' | 'starting' | 'stopping'
  lastServiceResult: ServiceActionResult | null
  
  // Actions
  detectOllama: () => Promise<OllamaDetectionResult | null>
  startService: () => Promise<ServiceActionResult>
  stopService: () => Promise<ServiceActionResult>
  openSetupWizard: () => void
  closeSetupWizard: () => void
  setSetupStep: (step: 'detection' | 'installation' | 'service' | 'complete') => void
  resetSetup: () => void
}

export const useSetupStore = create<SetupState>((set, get) => ({
  detection: null,
  isDetecting: false,
  isSetupWizardOpen: false,
  setupStep: 'detection',
  serviceAction: 'idle',
  lastServiceResult: null,
  
  detectOllama: async () => {
    set({ isDetecting: true })
    try {
      const result = await invoke<OllamaDetectionResult>('detect_ollama')
      set({ detection: result, isDetecting: false })
      
      // Auto-determine next step based on detection
      if (!result.installed) {
        set({ setupStep: 'installation' })
      } else if (!result.service_running) {
        set({ setupStep: 'service' })
      } else {
        set({ setupStep: 'complete' })
      }
      
      return result
    } catch (error) {
      console.error('Failed to detect Ollama:', error)
      const fallbackResult: OllamaDetectionResult = {
        installed: false,
        service_running: false,
        service_enabled: false,
        suggested_install_commands: []
      }
      set({ 
        isDetecting: false,
        detection: fallbackResult
      })
      return null
    }
  },
  
  startService: async () => {
    set({ serviceAction: 'starting' })
    try {
      const result = await invoke<ServiceActionResult>('start_ollama_service')
      set({ 
        serviceAction: 'idle', 
        lastServiceResult: result,
      })
      
      // Update detection state
      if (result.success) {
        const currentDetection = get().detection
        if (currentDetection) {
          set({
            detection: {
              ...currentDetection,
              service_running: result.service_running
            }
          })
        }
        
        // Move to complete step if service started successfully
        if (result.service_running) {
          set({ setupStep: 'complete' })
        }
      }
      
      return result
    } catch (error) {
      const errorResult: ServiceActionResult = {
        success: false,
        message: `Failed to start service: ${error}`,
        service_running: false
      }
      set({ 
        serviceAction: 'idle', 
        lastServiceResult: errorResult 
      })
      return errorResult
    }
  },
  
  stopService: async () => {
    set({ serviceAction: 'stopping' })
    try {
      const result = await invoke<ServiceActionResult>('stop_ollama_service')
      set({ 
        serviceAction: 'idle', 
        lastServiceResult: result 
      })
      
      // Update detection state
      const currentDetection = get().detection
      if (currentDetection) {
        set({
          detection: {
            ...currentDetection,
            service_running: result.service_running
          }
        })
      }
      
      return result
    } catch (error) {
      const errorResult: ServiceActionResult = {
        success: false,
        message: `Failed to stop service: ${error}`,
        service_running: true
      }
      set({ 
        serviceAction: 'idle', 
        lastServiceResult: errorResult 
      })
      return errorResult
    }
  },
  
  openSetupWizard: () => {
    set({ isSetupWizardOpen: true })
    // Auto-detect when opening wizard
    get().detectOllama()
  },
  
  closeSetupWizard: () => {
    set({ isSetupWizardOpen: false })
  },
  
  setSetupStep: (step) => {
    set({ setupStep: step })
  },
  
  resetSetup: () => {
    set({
      detection: null,
      setupStep: 'detection',
      serviceAction: 'idle',
      lastServiceResult: null
    })
  }
}))
