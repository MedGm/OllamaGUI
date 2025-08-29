import { useState } from 'react'
import { X, Sliders, RefreshCw } from 'lucide-react'
import { useSettingsStore } from '../store/settingsStore'

interface ParametersPanelProps {
  isOpen: boolean
  onClose: () => void
}

export default function ParametersPanel({ isOpen, onClose }: ParametersPanelProps) {
  const {
    defaultParams,
    setDefaultParams,
    saveSettingsToBackend
  } = useSettingsStore()

  const [localParams, setLocalParams] = useState(defaultParams)
  const [hasChanges, setHasChanges] = useState(false)

  const handleParamChange = (param: string, value: number) => {
    const newParams = { ...localParams, [param]: value }
    setLocalParams(newParams)
    setHasChanges(true)
  }

  const handleSave = async () => {
    setDefaultParams(localParams)
    await saveSettingsToBackend()
    setHasChanges(false)
  }

  const handleReset = () => {
    setLocalParams(defaultParams)
    setHasChanges(false)
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-md">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-100">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-blue-100 rounded-xl">
              <Sliders size={20} className="text-blue-600" />
            </div>
            <h2 className="text-lg font-semibold text-gray-900">Generation Parameters</h2>
          </div>
          <button 
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-xl transition-colors"
          >
            <X size={20} className="text-gray-500" />
          </button>
        </div>

        {/* Parameters */}
        <div className="p-6 space-y-6">
          {/* Temperature */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="text-sm font-semibold text-gray-900">Temperature</label>
              <span className="text-sm font-mono bg-gray-100 px-2 py-1 rounded text-gray-700">
                {localParams.temperature.toFixed(1)}
              </span>
            </div>
            <input
              type="range"
              min="0"
              max="2"
              step="0.1"
              value={localParams.temperature}
              onChange={(e) => handleParamChange('temperature', parseFloat(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
            />
            <div className="flex justify-between text-xs text-gray-500 mt-1">
              <span>0.0 (Focused)</span>
              <span>2.0 (Creative)</span>
            </div>
            <p className="text-xs text-gray-600 mt-2">
              Controls randomness. Lower values make responses more focused and deterministic.
            </p>
          </div>

          {/* Top K */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="text-sm font-semibold text-gray-900">Top K</label>
              <span className="text-sm font-mono bg-gray-100 px-2 py-1 rounded text-gray-700">
                {localParams.topK}
              </span>
            </div>
            <input
              type="range"
              min="1"
              max="100"
              step="1"
              value={localParams.topK}
              onChange={(e) => handleParamChange('topK', parseInt(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
            />
            <div className="flex justify-between text-xs text-gray-500 mt-1">
              <span>1</span>
              <span>100</span>
            </div>
            <p className="text-xs text-gray-600 mt-2">
              Limits the number of top tokens considered. Lower values increase focus.
            </p>
          </div>

          {/* Top P */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="text-sm font-semibold text-gray-900">Top P</label>
              <span className="text-sm font-mono bg-gray-100 px-2 py-1 rounded text-gray-700">
                {localParams.topP.toFixed(2)}
              </span>
            </div>
            <input
              type="range"
              min="0.01"
              max="1"
              step="0.01"
              value={localParams.topP}
              onChange={(e) => handleParamChange('topP', parseFloat(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
            />
            <div className="flex justify-between text-xs text-gray-500 mt-1">
              <span>0.01</span>
              <span>1.00</span>
            </div>
            <p className="text-xs text-gray-600 mt-2">
              Nucleus sampling. Lower values focus on more probable tokens.
            </p>
          </div>

          {/* Max Tokens */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="text-sm font-semibold text-gray-900">Max Tokens</label>
              <span className="text-sm font-mono bg-gray-100 px-2 py-1 rounded text-gray-700">
                {localParams.maxTokens}
              </span>
            </div>
            <input
              type="range"
              min="256"
              max="8192"
              step="256"
              value={localParams.maxTokens}
              onChange={(e) => handleParamChange('maxTokens', parseInt(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
            />
            <div className="flex justify-between text-xs text-gray-500 mt-1">
              <span>256</span>
              <span>8192</span>
            </div>
            <p className="text-xs text-gray-600 mt-2">
              Maximum number of tokens in the response. Higher values allow longer responses.
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between p-6 border-t border-gray-100 bg-gray-50 rounded-b-2xl">
          <button
            onClick={handleReset}
            className="flex items-center gap-2 px-4 py-2 text-gray-600 hover:text-gray-800 hover:bg-gray-200 rounded-xl transition-all duration-200"
            disabled={!hasChanges}
          >
            <RefreshCw size={16} />
            <span className="text-sm font-medium">Reset</span>
          </button>
          
          <div className="flex items-center gap-3">
            <button
              onClick={onClose}
              className="px-4 py-2 text-gray-600 hover:text-gray-800 rounded-xl transition-colors"
            >
              Cancel
            </button>
            <button
              onClick={handleSave}
              className={`px-6 py-2 rounded-xl font-medium transition-all duration-200 ${
                hasChanges
                  ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-sm hover:shadow-md'
                  : 'bg-gray-200 text-gray-500 cursor-not-allowed'
              }`}
              disabled={!hasChanges}
            >
              Save Parameters
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
