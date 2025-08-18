import { create } from 'zustand'
import { invoke } from '@tauri-apps/api/core'
import { listen } from '@tauri-apps/api/event'

export interface OllamaModel {
  name: string
  modified_at: string
  size: number
  digest: string
  details?: {
    format: string
    family: string
    families?: string[]
    parameter_size: string
    quantization_level: string
  }
}

interface ModelsState {
  models: OllamaModel[]
  isLoading: boolean
  error: string | null
  // Pull progress keyed by pull_id
  pulls: Record<string, any>
  
  // Actions
  fetchModels: () => Promise<void>
  pullModel: (name: string) => Promise<string | null>
  deleteModel: (name: string) => Promise<boolean>
  showModel: (name: string) => Promise<any | null>
  clearError: () => void
}

export const useModelsStore = create<ModelsState>((set) => ({
  models: [],
  isLoading: false,
  error: null,
  pulls: {},
  
  fetchModels: async () => {
    set({ isLoading: true, error: null })
    
    try {
      // For now, we'll implement a basic models list
      // This will be connected to the actual Ollama API later
      const result = await invoke('models_list') as { models: OllamaModel[] }
      set({ models: result.models || [], isLoading: false })
    } catch (error) {
      console.error('Failed to fetch models:', error)
      set({ 
        models: [], 
        isLoading: false, 
        error: error as string 
      })
    }
  },
  pullModel: async (name: string) => {
    try {
      // Attach listeners lazily per pull
      let pullId: string | null = null
      const unlistenStart = await listen('models:pull-start', (e: any) => {
        const { pull_id, name: n } = e.payload
        if (n !== name) return
        pullId = pull_id
        set((s) => ({ pulls: { ...s.pulls, [pull_id]: { name, progress: {}, status: 'starting' } } }))
      })
      const unlistenProgress = await listen('models:pull-progress', (e: any) => {
        const { pull_id, progress } = e.payload
        set((s) => ({ pulls: { ...s.pulls, [pull_id]: { ...(s.pulls[pull_id] || {}), progress, status: 'in-progress' } } }))
      })
      const unlistenError = await listen('models:pull-error', (e: any) => {
        const { pull_id, error } = e.payload
        set((s) => ({ pulls: { ...s.pulls, [pull_id]: { ...(s.pulls[pull_id] || {}), error, status: 'error' } } }))
      })
      const unlistenComplete = await listen('models:pull-complete', (e: any) => {
        const { pull_id } = e.payload
        set((s) => ({ pulls: { ...s.pulls, [pull_id]: { ...(s.pulls[pull_id] || {}), status: 'complete' } } }))
        // refresh list when done
        useModelsStore.getState().fetchModels().catch(() => {})
        // cleanup listeners
        unlistenStart()
        unlistenProgress()
        unlistenError()
        unlistenComplete()
      })

      const res = await invoke('model_pull', { name }) as { success: boolean, error?: string }
      if (!res.success) {
        throw new Error(res.error || 'Pull failed')
      }
      return pullId
    } catch (e) {
      set({ error: String(e) })
      return null
    }
  },
  deleteModel: async (name: string) => {
    try {
      const res = await invoke('model_delete', { name }) as { success: boolean, error?: string }
      if (!res.success) throw new Error(res.error || 'Delete failed')
      await useModelsStore.getState().fetchModels()
      return true
    } catch (e) {
      set({ error: String(e) })
      return false
    }
  },
  showModel: async (name: string) => {
    try {
      const res = await invoke('model_show', { name })
      return res
    } catch (e) {
      set({ error: String(e) })
      return null
    }
  },
  
  clearError: () => set({ error: null }),
}))
