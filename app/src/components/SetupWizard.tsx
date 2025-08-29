import React from 'react'
import { X, CheckCircle, AlertCircle, Loader2, Play, Square, Download, ExternalLink } from 'lucide-react'
import { useSetupStore } from '../store/setupStore'

export const SetupWizard: React.FC = () => {
  const {
    detection,
    isDetecting,
    isSetupWizardOpen,
    setupStep,
    serviceAction,
    lastServiceResult,
    detectOllama,
    startService,
    stopService,
    closeSetupWizard,
    setSetupStep
  } = useSetupStore()

  if (!isSetupWizardOpen) return null

  const handleStartService = async () => {
    await startService()
  }

  const handleStopService = async () => {
    await stopService()
  }

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
  }

  const renderDetectionStep = () => (
    <div className="space-y-6">
      <div className="text-center">
        <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
          {isDetecting ? (
            <Loader2 className="w-8 h-8 text-blue-600 animate-spin" />
          ) : detection?.installed ? (
            <CheckCircle className="w-8 h-8 text-green-600" />
          ) : (
            <AlertCircle className="w-8 h-8 text-amber-600" />
          )}
        </div>
        <h3 className="text-lg font-semibold mb-2">
          {isDetecting ? 'Detecting Ollama...' : 'Ollama Detection'}
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-300">
          {isDetecting 
            ? 'Checking for Ollama installation and service status'
            : 'We\'ve checked your system for Ollama'
          }
        </p>
      </div>

      {detection && !isDetecting && (
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className={`p-3 rounded-lg border ${detection.installed 
              ? 'border-green-200 bg-green-50 dark:border-green-800 dark:bg-green-900/20' 
              : 'border-red-200 bg-red-50 dark:border-red-800 dark:bg-red-900/20'
            }`}>
              <div className="flex items-center gap-2">
                {detection.installed ? (
                  <CheckCircle className="w-4 h-4 text-green-600" />
                ) : (
                  <X className="w-4 h-4 text-red-600" />
                )}
                <span className="text-sm font-medium">Installation</span>
              </div>
              <p className="text-xs text-gray-600 dark:text-gray-300 mt-1">
                {detection.installed ? `Installed (${detection.version || 'Unknown version'})` : 'Not installed'}
              </p>
            </div>

            <div className={`p-3 rounded-lg border ${detection.service_running
              ? 'border-green-200 bg-green-50 dark:border-green-800 dark:bg-green-900/20' 
              : 'border-amber-200 bg-amber-50 dark:border-amber-800 dark:bg-amber-900/20'
            }`}>
              <div className="flex items-center gap-2">
                {detection.service_running ? (
                  <CheckCircle className="w-4 h-4 text-green-600" />
                ) : (
                  <AlertCircle className="w-4 h-4 text-amber-600" />
                )}
                <span className="text-sm font-medium">Service</span>
              </div>
              <p className="text-xs text-gray-600 dark:text-gray-300 mt-1">
                {detection.service_running ? 'Running' : 'Not running'}
              </p>
            </div>
          </div>

          {detection.binary_path && (
            <div className="text-xs text-gray-500 dark:text-gray-400">
              Binary location: <code className="bg-gray-100 dark:bg-gray-800 px-1 rounded">{detection.binary_path}</code>
            </div>
          )}

          {detection.installation_method && (
            <div className="text-xs text-gray-500 dark:text-gray-400">
              Installation method: <span className="font-medium">{detection.installation_method}</span>
            </div>
          )}
        </div>
      )}

      <div className="flex gap-3 justify-end">
        <button
          onClick={detectOllama}
          disabled={isDetecting}
          className="px-4 py-2 text-sm border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 disabled:opacity-50"
        >
          {isDetecting ? 'Detecting...' : 'Re-scan'}
        </button>
        {detection && !detection.installed && (
          <button
            onClick={() => setSetupStep('installation')}
            className="px-4 py-2 text-sm bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Install Ollama
          </button>
        )}
        {detection && detection.installed && !detection.service_running && (
          <button
            onClick={() => setSetupStep('service')}
            className="px-4 py-2 text-sm bg-green-600 text-white rounded-lg hover:bg-green-700"
          >
            Start Service
          </button>
        )}
      </div>
    </div>
  )

  const renderInstallationStep = () => (
    <div className="space-y-6">
      <div className="text-center">
        <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
          <Download className="w-8 h-8 text-blue-600" />
        </div>
        <h3 className="text-lg font-semibold mb-2">Install Ollama</h3>
        <p className="text-sm text-gray-600 dark:text-gray-300">
          Choose an installation method below
        </p>
      </div>

      <div className="space-y-4">
        <div className="p-4 border border-blue-200 dark:border-blue-800 rounded-lg bg-blue-50 dark:bg-blue-900/20">
          <h4 className="font-medium mb-2 flex items-center gap-2">
            <span className="w-6 h-6 bg-blue-600 text-white rounded text-xs flex items-center justify-center">1</span>
            Recommended: Official Install Script
          </h4>
          <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">
            The easiest way to install Ollama with automatic setup
          </p>
          <div className="bg-gray-900 dark:bg-gray-800 p-3 rounded font-mono text-sm text-green-400">
            curl -fsSL https://ollama.com/install.sh | sh
          </div>
          <div className="mt-2 flex gap-2">
            <button
              onClick={() => copyToClipboard('curl -fsSL https://ollama.com/install.sh | sh')}
              className="text-xs px-2 py-1 bg-gray-200 dark:bg-gray-700 rounded hover:bg-gray-300 dark:hover:bg-gray-600"
            >
              Copy
            </button>
            <a
              href="https://ollama.com/download"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs px-2 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 flex items-center gap-1"
            >
              <ExternalLink className="w-3 h-3" />
              Visit Site
            </a>
          </div>
        </div>

        {detection?.suggested_install_commands && detection.suggested_install_commands.length > 0 && (
          <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
            <h4 className="font-medium mb-2 flex items-center gap-2">
              <span className="w-6 h-6 bg-gray-600 text-white rounded text-xs flex items-center justify-center">2</span>
              Alternative: Manual Installation
            </h4>
            <div className="space-y-2">
              {detection.suggested_install_commands.map((command, index) => (
                <div key={index}>
                  {command.startsWith('#') ? (
                    <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">
                      {command}
                    </p>
                  ) : (
                    <div className="bg-gray-900 dark:bg-gray-800 p-2 rounded font-mono text-sm text-green-400 flex items-center justify-between">
                      <span>{command}</span>
                      <button
                        onClick={() => copyToClipboard(command)}
                        className="text-xs px-2 py-1 bg-gray-700 hover:bg-gray-600 rounded ml-2"
                      >
                        Copy
                      </button>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="p-3 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-lg">
          <p className="text-sm text-amber-800 dark:text-amber-200">
            <strong>Note:</strong> After installation, you may need to restart your terminal or log out and back in for the PATH changes to take effect.
          </p>
        </div>
      </div>

      <div className="flex gap-3 justify-between">
        <button
          onClick={() => setSetupStep('detection')}
          className="px-4 py-2 text-sm border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800"
        >
          Back
        </button>
        <button
          onClick={detectOllama}
          className="px-4 py-2 text-sm bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          Check Installation
        </button>
      </div>
    </div>
  )

  const renderServiceStep = () => (
    <div className="space-y-6">
      <div className="text-center">
        <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
          {serviceAction !== 'idle' ? (
            <Loader2 className="w-8 h-8 text-green-600 animate-spin" />
          ) : (
            <Play className="w-8 h-8 text-green-600" />
          )}
        </div>
        <h3 className="text-lg font-semibold mb-2">Start Ollama Service</h3>
        <p className="text-sm text-gray-600 dark:text-gray-300">
          Ollama is installed but the service is not running
        </p>
      </div>

      {detection && (
        <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
          <h4 className="font-medium mb-2">Current Status</h4>
          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
              <span className="text-sm">Installed: {detection.version || 'Yes'}</span>
            </div>
            <div className="flex items-center gap-2">
              <div className={`w-3 h-3 rounded-full ${detection.service_running ? 'bg-green-500' : 'bg-red-500'}`}></div>
              <span className="text-sm">Service: {detection.service_running ? 'Running' : 'Stopped'}</span>
            </div>
          </div>
        </div>
      )}

      {lastServiceResult && (
        <div className={`p-4 rounded-lg border ${
          lastServiceResult.success 
            ? 'border-green-200 bg-green-50 dark:border-green-800 dark:bg-green-900/20' 
            : 'border-red-200 bg-red-50 dark:border-red-800 dark:bg-red-900/20'
        }`}>
          <p className="text-sm font-medium mb-1">
            {lastServiceResult.success ? 'Success' : 'Error'}
          </p>
          <p className="text-sm text-gray-600 dark:text-gray-300">
            {lastServiceResult.message}
          </p>
        </div>
      )}

      <div className="flex gap-3 justify-between">
        <button
          onClick={() => setSetupStep('detection')}
          className="px-4 py-2 text-sm border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800"
        >
          Back
        </button>
        <div className="flex gap-2">
          {detection?.service_running ? (
            <button
              onClick={handleStopService}
              disabled={serviceAction !== 'idle'}
              className="px-4 py-2 text-sm bg-red-600 text-white rounded-lg hover:bg-red-700 disabled:opacity-50 flex items-center gap-2"
            >
              {serviceAction === 'stopping' ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Stopping...
                </>
              ) : (
                <>
                  <Square className="w-4 h-4" />
                  Stop Service
                </>
              )}
            </button>
          ) : (
            <button
              onClick={handleStartService}
              disabled={serviceAction !== 'idle'}
              className="px-4 py-2 text-sm bg-green-600 text-white rounded-lg hover:bg-green-700 disabled:opacity-50 flex items-center gap-2"
            >
              {serviceAction === 'starting' ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Starting...
                </>
              ) : (
                <>
                  <Play className="w-4 h-4" />
                  Start Service
                </>
              )}
            </button>
          )}
        </div>
      </div>
    </div>
  )

  const renderCompleteStep = () => (
    <div className="space-y-6">
      <div className="text-center">
        <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
          <CheckCircle className="w-8 h-8 text-green-600" />
        </div>
        <h3 className="text-lg font-semibold mb-2">Setup Complete!</h3>
        <p className="text-sm text-gray-600 dark:text-gray-300">
          Ollama is installed and running. You can now start chatting with models.
        </p>
      </div>

      {detection && (
        <div className="p-4 border border-green-200 dark:border-green-800 rounded-lg bg-green-50 dark:bg-green-900/20">
          <h4 className="font-medium mb-2">System Status</h4>
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-sm">Ollama Version:</span>
              <span className="text-sm font-mono">{detection.version || 'Unknown'}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm">Service Status:</span>
              <span className="text-sm text-green-600 font-medium">Running</span>
            </div>
            {detection.binary_path && (
              <div className="flex items-center justify-between">
                <span className="text-sm">Binary Path:</span>
                <code className="text-xs bg-gray-100 dark:bg-gray-800 px-1 rounded">
                  {detection.binary_path}
                </code>
              </div>
            )}
          </div>
        </div>
      )}

      <div className="p-3 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg">
        <p className="text-sm text-blue-800 dark:text-blue-200">
          <strong>Next steps:</strong> You can now pull models like <code>llama2</code> or <code>mistral</code> from the Models tab and start chatting!
        </p>
      </div>

      <div className="flex justify-center">
        <button
          onClick={closeSetupWizard}
          className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
        >
          Start Using Ollama
        </button>
      </div>
    </div>
  )

  const getStepContent = () => {
    switch (setupStep) {
      case 'detection':
        return renderDetectionStep()
      case 'installation':
        return renderInstallationStep()
      case 'service':
        return renderServiceStep()
      case 'complete':
        return renderCompleteStep()
      default:
        return renderDetectionStep()
    }
  }

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white dark:bg-gray-900 rounded-xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 px-6 py-4 flex items-center justify-between">
          <h2 className="text-xl font-semibold">Ollama Setup Wizard</h2>
          <button
            onClick={closeSetupWizard}
            className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        
        <div className="px-6 py-6">
          {/* Step indicator */}
          <div className="flex items-center mb-8">
            {(['detection', 'installation', 'service', 'complete'] as const).map((step, index) => (
              <React.Fragment key={step}>
                <div className={`flex items-center justify-center w-8 h-8 rounded-full text-sm font-medium ${
                  setupStep === step 
                    ? 'bg-blue-600 text-white' 
                    : index < (['detection', 'installation', 'service', 'complete'] as const).indexOf(setupStep)
                      ? 'bg-green-600 text-white'
                      : 'bg-gray-200 dark:bg-gray-700 text-gray-500'
                }`}>
                  {index + 1}
                </div>
                {index < 3 && (
                  <div className={`flex-1 h-0.5 mx-2 ${
                    index < (['detection', 'installation', 'service', 'complete'] as const).indexOf(setupStep)
                      ? 'bg-green-600'
                      : 'bg-gray-200 dark:bg-gray-700'
                  }`} />
                )}
              </React.Fragment>
            ))}
          </div>

          {getStepContent()}
        </div>
      </div>
    </div>
  )
}
