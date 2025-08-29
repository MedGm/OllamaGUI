import { useEffect } from 'react'
import { useSettingsStore } from '../store/settingsStore'

export default function SettingsRoute() {
  const {
    serverUrl, serverPort, defaultModel, defaultParams,
    setServerUrl, setServerPort, setDefaultModel, setDefaultParams,
    loadSettingsFromBackend, saveSettingsToBackend
  } = useSettingsStore()

  useEffect(() => { loadSettingsFromBackend() }, [])

  const save = async () => { await saveSettingsToBackend() }

  return (
    <div className="p-8 max-w-4xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Settings</h1>
        <p className="text-gray-600">Configure your Ollama GUI preferences and connection settings</p>
      </div>

      <div className="space-y-8">
        {/* Server Configuration */}
        <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-3">
            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
            Server Configuration
          </h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2">Server Connection</label>
              <div className="flex gap-3">
                <input 
                  value={serverUrl} 
                  onChange={(e) => setServerUrl(e.target.value)} 
                  placeholder="http://localhost"
                  className="flex-1 px-4 py-3 border border-gray-200 rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all duration-200 text-gray-900 placeholder-gray-500" 
                />
                <input 
                  type="number" 
                  value={serverPort} 
                  onChange={(e) => setServerPort(Number(e.target.value))} 
                  placeholder="11434"
                  className="w-32 px-4 py-3 border border-gray-200 rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all duration-200 text-gray-900 placeholder-gray-500" 
                />
              </div>
              <p className="text-xs text-gray-500 mt-2">Configure the Ollama server URL and port</p>
            </div>
          </div>
        </div>

        {/* Model Configuration */}
        <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-3">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            Model Settings
          </h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2">Default Model</label>
              <input 
                value={defaultModel} 
                onChange={(e) => setDefaultModel(e.target.value)} 
                placeholder="llama3:instruct"
                className="w-full px-4 py-3 border border-gray-200 rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all duration-200 text-gray-900 placeholder-gray-500" 
              />
              <p className="text-xs text-gray-500 mt-2">Model to use by default for new chats</p>
            </div>
          </div>
        </div>

        {/* Generation Parameters */}
        <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-3">
            <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
            Generation Parameters
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2">Temperature</label>
              <input 
                type="number" 
                step="0.1" 
                min="0" 
                max="2"
                value={defaultParams.temperature} 
                onChange={(e) => setDefaultParams({ temperature: Number(e.target.value) })} 
                className="w-full px-4 py-3 border border-gray-200 rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all duration-200 text-gray-900" 
              />
              <p className="text-xs text-gray-500 mt-1">Controls randomness (0.0 - 2.0)</p>
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2">Top K</label>
              <input 
                type="number" 
                min="1"
                value={defaultParams.topK} 
                onChange={(e) => setDefaultParams({ topK: Number(e.target.value) })} 
                className="w-full px-4 py-3 border border-gray-200 rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all duration-200 text-gray-900" 
              />
              <p className="text-xs text-gray-500 mt-1">Limits token choices</p>
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2">Top P</label>
              <input 
                type="number" 
                step="0.01" 
                min="0"
                max="1"
                value={defaultParams.topP} 
                onChange={(e) => setDefaultParams({ topP: Number(e.target.value) })} 
                className="w-full px-4 py-3 border border-gray-200 rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all duration-200 text-gray-900" 
              />
              <p className="text-xs text-gray-500 mt-1">Nucleus sampling (0.0 - 1.0)</p>
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2">Max Tokens</label>
              <input 
                type="number" 
                min="1"
                value={defaultParams.maxTokens} 
                onChange={(e) => setDefaultParams({ maxTokens: Number(e.target.value) })} 
                className="w-full px-4 py-3 border border-gray-200 rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all duration-200 text-gray-900" 
              />
              <p className="text-xs text-gray-500 mt-1">Maximum response length</p>
            </div>
          </div>
        </div>

        {/* Save Button */}
        <div className="flex justify-end pt-4">
          <button 
            onClick={save} 
            className="px-8 py-3 bg-gradient-to-br from-gray-900 to-gray-800 hover:from-gray-800 hover:to-gray-700 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-0.5"
          >
            Save Settings
          </button>
        </div>
      </div>
    </div>
  )
}
