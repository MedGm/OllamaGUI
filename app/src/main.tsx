import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { invoke } from '@tauri-apps/api/core'
import { useSettingsStore } from './store/settingsStore'
import { useChatStore } from './store/chatStore'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

// Dev/HMR + window unload cleanup: ensure any running streams are aborted to avoid callback warnings
if (import.meta.hot) {
  import.meta.hot.dispose(() => {
    if ((window as any).__TAURI__?.core?.invoke) {
      invoke('abort_chat').catch(() => {})
    }
  })
}

window.addEventListener('beforeunload', () => {
  if ((window as any).__TAURI__?.core?.invoke) {
    invoke('abort_chat').catch(() => {})
  }
})

// Helper: wait for Tauri bridge to be ready (WebKit may inject a tad later)
async function waitForTauriReady(timeoutMs = 3000): Promise<boolean> {
  const start = Date.now()
  while (Date.now() - start < timeoutMs) {
    if ((window as any).__TAURI__?.core?.invoke) return true
    await new Promise((r) => setTimeout(r, 50))
  }
  return !!(window as any).__TAURI__?.core?.invoke
}

// Initial settings load and default model bootstrap
;(async () => {
  try {
    await waitForTauriReady()
    const load = (useSettingsStore as any).getState().loadSettingsFromBackend as () => Promise<void>
    await load()
    const { defaultModel } = (useSettingsStore as any).getState()
    if (defaultModel) {
      (useChatStore as any).getState().setCurrentModel(defaultModel)
    }
  } catch {}
})()
