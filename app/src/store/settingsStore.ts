import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { invoke } from '@tauri-apps/api/core'

interface SettingsState {
  serverUrl: string
  serverPort: number
  defaultModel: string
  defaultParams: {
    temperature: number
    topK: number
    topP: number
    maxTokens: number
  }
  theme: 'light' | 'dark' | 'system'
  setServerUrl: (url: string) => void
  setServerPort: (port: number) => void
  setDefaultModel: (model: string) => void
  setDefaultParams: (params: Partial<SettingsState['defaultParams']>) => void
  setTheme: (theme: SettingsState['theme']) => void
  loadSettingsFromBackend: () => Promise<void>
  saveSettingsToBackend: () => Promise<void>
}

export const useSettingsStore = create<SettingsState>()(
  persist(
    (set, get) => ({
      serverUrl: 'http://localhost',
      serverPort: 11434,
      defaultModel: '',
      defaultParams: {
        temperature: 0.8,
        topK: 40,
        topP: 0.9,
        maxTokens: 2048,
      },
      theme: 'light',
      setServerUrl: (serverUrl) => set({ serverUrl }),
      setServerPort: (serverPort) => set({ serverPort }),
      setDefaultModel: (defaultModel) => set({ defaultModel }),
      setDefaultParams: (params) => 
        set((state) => ({ 
          defaultParams: { ...state.defaultParams, ...params } 
        })),
      setTheme: (theme) => set({ theme }),
      loadSettingsFromBackend: async () => {
        try {
          const s = await invoke<any>('settings_get')
          // Map backend shape to store
          const url: string = s.server_url || 'http://localhost:11434'
          const defaultModel: string = s.default_model || ''
          const params = s.default_params || {}
          const theme: 'light' | 'dark' | 'system' = s.theme || 'light'
          // Split url and port if possible
          let serverUrl = url
          let serverPort = 11434
          try {
            const u = new URL(url)
            serverUrl = `${u.protocol}//${u.hostname}`
            serverPort = Number(u.port) || 11434
          } catch {
            // if not a valid URL, keep existing
          }
          set({
            serverUrl,
            serverPort,
            defaultModel,
            defaultParams: {
              temperature: params.temperature ?? 0.8,
              topK: params.top_k ?? 40,
              topP: params.top_p ?? 0.9,
              maxTokens: params.max_tokens ?? 2048,
            },
            theme,
          })
        } catch (e) {
          console.warn('settings_get failed; using local settings', e)
        }
      },
      saveSettingsToBackend: async () => {
        const s = get()
        const server_url = `${s.serverUrl}:${s.serverPort}`
        const payload = {
          server_url,
          default_model: s.defaultModel || undefined,
          default_params: {
            temperature: s.defaultParams.temperature,
            top_k: s.defaultParams.topK,
            top_p: s.defaultParams.topP,
            max_tokens: s.defaultParams.maxTokens,
          },
          theme: s.theme,
        }
        try {
          await invoke('settings_set', { settings: payload })
        } catch (e) {
          console.error('settings_set failed', e)
        }
      },
    }),
    {
      name: 'ollama-gui-settings',
    }
  )
)