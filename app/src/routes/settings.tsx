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
    <div className="p-6 max-w-3xl mx-auto space-y-6">
      <h1 className="text-xl font-semibold">Settings</h1>

      <div className="space-y-2">
        <label className="block text-sm font-medium">Server URL</label>
        <div className="flex gap-2">
          <input value={serverUrl} onChange={(e) => setServerUrl(e.target.value)} className="flex-1 px-3 py-2 border rounded" />
          <input type="number" value={serverPort} onChange={(e) => setServerPort(Number(e.target.value))} className="w-28 px-3 py-2 border rounded" />
        </div>
      </div>

      <div className="space-y-2">
        <label className="block text-sm font-medium">Default model</label>
        <input value={defaultModel} onChange={(e) => setDefaultModel(e.target.value)} className="w-full px-3 py-2 border rounded" />
      </div>

      <div className="grid grid-cols-2 gap-3">
        <div>
          <label className="block text-sm font-medium">Temperature</label>
          <input type="number" step="0.1" value={defaultParams.temperature} onChange={(e) => setDefaultParams({ temperature: Number(e.target.value) })} className="w-full px-3 py-2 border rounded" />
        </div>
        <div>
          <label className="block text-sm font-medium">Top K</label>
          <input type="number" value={defaultParams.topK} onChange={(e) => setDefaultParams({ topK: Number(e.target.value) })} className="w-full px-3 py-2 border rounded" />
        </div>
        <div>
          <label className="block text-sm font-medium">Top P</label>
          <input type="number" step="0.01" value={defaultParams.topP} onChange={(e) => setDefaultParams({ topP: Number(e.target.value) })} className="w-full px-3 py-2 border rounded" />
        </div>
        <div>
          <label className="block text-sm font-medium">Max tokens</label>
          <input type="number" value={defaultParams.maxTokens} onChange={(e) => setDefaultParams({ maxTokens: Number(e.target.value) })} className="w-full px-3 py-2 border rounded" />
        </div>
      </div>

      <div>
        <button onClick={save} className="px-4 py-2 bg-black text-white rounded">Save</button>
      </div>
    </div>
  )
}
