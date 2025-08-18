import { ChevronDown, Cpu, AlertCircle } from 'lucide-react'
import { useState, useEffect } from 'react'
import { useChatStore } from '../store/chatStore'
import { useModelsStore } from '../store/modelsStore'

export default function ModelSelector() {
  const [isOpen, setIsOpen] = useState(false)
  const { currentModel, setCurrentModel } = useChatStore()
  const { models, isLoading, error, fetchModels } = useModelsStore()
  
  useEffect(() => {
    fetchModels()
  }, [])
  
  const selectedModel = models.find(m => m.name === currentModel)
  
  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-3 px-4 py-2 bg-gray-50 hover:bg-gray-100 border border-gray-200 rounded-lg transition-colors min-w-[200px]"
      >
        <Cpu size={18} className="text-gray-600 flex-shrink-0" />
        <span className="text-sm font-medium text-gray-900 truncate flex-1 text-left">
          {selectedModel ? selectedModel.name : 'Select a model'}
        </span>
        <ChevronDown size={16} className="text-gray-500 flex-shrink-0" />
      </button>
      
      {isOpen && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg z-50 max-h-80 overflow-y-auto">
          {isLoading ? (
            <div className="p-4 text-center text-gray-500">
              <div className="animate-spin w-5 h-5 border-2 border-gray-300 border-t-black rounded-full mx-auto mb-2"></div>
              Loading models...
            </div>
          ) : error ? (
            <div className="p-4 text-center text-red-600">
              <AlertCircle size={20} className="mx-auto mb-2" />
              <div className="text-sm">Failed to load models</div>
              <div className="text-xs text-gray-500 mt-1">{error}</div>
              <button
                onClick={fetchModels}
                className="mt-2 px-3 py-1 text-xs bg-red-50 hover:bg-red-100 text-red-600 rounded"
              >
                Retry
              </button>
            </div>
          ) : models.length === 0 ? (
              <div className="p-4 text-center text-gray-500">
                No models found. Pull one in the Models tab.
              </div>
          ) : (
            <div className="py-2">
                {models.map((model) => (
                  <button
                    key={model.name}
                    onClick={() => { setCurrentModel(model.name); setIsOpen(false) }}
                    className="w-full text-left px-4 py-2 hover:bg-gray-50 flex items-center gap-2"
                  >
                    <span className="text-sm text-gray-900 truncate">{model.name}</span>
                  </button>
                ))}
            </div>
          )}
        </div>
      )}
      
      {/* Overlay to close dropdown */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}
    </div>
  )
}
