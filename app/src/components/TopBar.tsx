import { Square, Settings2, AlertCircle } from 'lucide-react'
import ModelSelector from './ModelSelector'
import { useOllamaHealth } from '../lib/hooks'
import { useSettingsStore } from '../store/settingsStore'
import { useChatStore } from '../store/chatStore'

export default function TopBar() {
  const { serverUrl, serverPort } = useSettingsStore()
  const { isStreaming, stopStreaming } = useChatStore()
  const fullServerUrl = `${serverUrl}:${serverPort}`
  const { health, isLoading } = useOllamaHealth(fullServerUrl)
  
  return (
    <div className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-6">
      {/* Left Side - Model Selector */}
      <div className="flex items-center gap-4">
        <ModelSelector />
        
        {/* Parameters Button */}
        <button className="flex items-center gap-2 px-3 py-2 text-gray-600 hover:bg-gray-50 rounded-lg transition-colors">
          <Settings2 size={16} />
          <span className="text-sm">Parameters</span>
        </button>
      </div>
      
      {/* Center - Connection Status */}
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-2">
          {isLoading ? (
            <div className="w-2 h-2 bg-amber-500 rounded-full animate-pulse"></div>
          ) : (
            <div className={`w-2 h-2 rounded-full ${health.connected ? 'bg-green-500' : 'bg-red-500'}`}></div>
          )}
          <span className="text-sm text-gray-600">
            {isLoading ? 'Connecting...' : health.connected ? 'Connected to Ollama' : 'Disconnected'}
          </span>
          {health.error && (
            <div className="group relative">
              <AlertCircle size={16} className="text-red-500 cursor-help" />
              <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-gray-900 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10 max-w-xs">
                {health.error}
              </div>
            </div>
          )}
        </div>
      </div>
      
      {/* Right Side - Controls */}
      <div className="flex items-center gap-3">
        {isStreaming && (
          <button 
            className="flex items-center gap-2 px-4 py-2 bg-red-50 hover:bg-red-100 text-red-700 border border-red-200 rounded-lg transition-colors"
            onClick={stopStreaming}
          >
            <Square size={14} />
            Stop generating
          </button>
        )}
        
        <div className="text-sm text-gray-500">
          <span>Ready</span>
        </div>
      </div>
    </div>
  )
}
