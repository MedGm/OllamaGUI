import { Bot, ArrowUp, Square } from 'lucide-react'
import { useState, useEffect, useRef } from 'react'
import { useChatStore } from '../store/chatStore'
import Message from './Message'

export default function MainPanel() {
  const [message, setMessage] = useState('')
  const messagesEndRef = useRef<HTMLDivElement>(null)
  // Subscribe to all relevant state to force re-renders
  const { 
    messages, 
    sendMessage, 
    currentModel, 
    isStreaming, 
    updateCounter, 
    lastUpdate,
    stopStreaming 
  } = useChatStore()
  
  // Add debugging for re-renders
  console.log('🎨 MainPanel render - message count:', messages.length, 'updateCounter:', updateCounter, 'lastUpdate:', lastUpdate)
  
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }
  
  useEffect(() => {
    scrollToBottom()
  }, [messages])
  
  const handleSendMessage = async () => {
    if (!message.trim() || isStreaming || !currentModel) return
    
    const messageContent = message.trim()
    setMessage('')
    
    // Reset textarea height
    const textarea = document.querySelector('textarea')
    if (textarea) {
      textarea.style.height = 'auto'
    }
    
    await sendMessage(messageContent)
  }
  
  const handleStopStreaming = async () => {
    await stopStreaming()
  }
  
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }
  
  const handleInput = (e: React.FormEvent<HTMLTextAreaElement>) => {
    const target = e.target as HTMLTextAreaElement
    target.style.height = 'auto'
    target.style.height = `${target.scrollHeight}px`
  }
  
  const hasMessages = messages.length > 0
  
  return (
    <div className="flex-1 flex flex-col min-h-0 overflow-hidden bg-white">
      {/* Chat Messages Area */}
      <div className="flex-1 min-h-0 overflow-y-auto">
        {!hasMessages ? (
          /* Welcome Message */
          <div className="flex flex-col items-center justify-center h-full p-8">
            <div className="max-w-2xl text-center">
              {/* Ollama Logo */}
              <div className="w-16 h-16 bg-black rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Bot size={32} className="text-white" />
              </div>
              
              <h1 className="text-2xl font-semibold text-gray-900 mb-3">
                How can I help you today?
              </h1>
              
              <p className="text-gray-600 mb-8 text-lg">
                {currentModel 
                  ? `I'm ready to chat using ${currentModel}` 
                  : 'Select a model to start chatting'
                }
              </p>
              
              {/* Quick Start Examples */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl">
                <button 
                  onClick={() => setMessage('Explain how this code works')}
                  className="p-4 bg-gray-50 hover:bg-gray-100 border border-gray-200 rounded-xl text-left transition-colors group"
                  disabled={!currentModel}
                >
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h3 className="font-medium text-gray-900 mb-1">Explain code</h3>
                      <p className="text-sm text-gray-600">Help me understand this function</p>
                    </div>
                  </div>
                </button>
                
                <button 
                  onClick={() => setMessage('Write a professional email')}
                  className="p-4 bg-gray-50 hover:bg-gray-100 border border-gray-200 rounded-xl text-left transition-colors group"
                  disabled={!currentModel}
                >
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h3 className="font-medium text-gray-900 mb-1">Write content</h3>
                      <p className="text-sm text-gray-600">Create an email or article</p>
                    </div>
                  </div>
                </button>
                
                <button 
                  onClick={() => setMessage('Help me analyze this data')}
                  className="p-4 bg-gray-50 hover:bg-gray-100 border border-gray-200 rounded-xl text-left transition-colors group"
                  disabled={!currentModel}
                >
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h3 className="font-medium text-gray-900 mb-1">Analyze data</h3>
                      <p className="text-sm text-gray-600">Help me understand patterns</p>
                    </div>
                  </div>
                </button>
                
                <button 
                  onClick={() => setMessage('What is machine learning?')}
                  className="p-4 bg-gray-50 hover:bg-gray-100 border border-gray-200 rounded-xl text-left transition-colors group"
                  disabled={!currentModel}
                >
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h3 className="font-medium text-gray-900 mb-1">Answer questions</h3>
                      <p className="text-sm text-gray-600">Get explanations on any topic</p>
                    </div>
                  </div>
                </button>
              </div>
            </div>
          </div>
        ) : (
          /* Chat Messages */
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            {messages.map((msg) => (
              <Message key={msg.id} message={msg} />
            ))}
            <div ref={messagesEndRef} />
          </div>
        )}
      </div>
      
      {/* Input Area */}
      <div className="border-t border-gray-200 bg-gray-50">
        <div className="max-w-3xl mx-auto w-full p-4 sm:p-6">
          <div className="relative">
            <div className="flex items-end gap-3 bg-white border border-gray-200 rounded-2xl p-3 focus-within:ring-2 focus-within:ring-black focus-within:border-transparent">
              <div className="flex-1">
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  onKeyDown={handleKeyDown}
                  onInput={handleInput}
                  placeholder={currentModel ? "Message Ollama..." : "Select a model to start chatting"}
                  className="w-full resize-none bg-transparent focus:outline-none text-gray-900 placeholder-gray-500 text-base leading-6"
                  style={{ minHeight: '24px', maxHeight: '200px' }}
                  rows={1}
                  disabled={!currentModel || isStreaming}
                />
              </div>
              <button 
                className={`p-2 rounded-lg transition-all ${
                  isStreaming
                    ? 'bg-red-600 hover:bg-red-700 text-white' 
                    : message.trim() && currentModel
                    ? 'bg-black hover:bg-gray-800 text-white' 
                    : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                }`}
                disabled={!currentModel && !isStreaming}
                onClick={isStreaming ? handleStopStreaming : handleSendMessage}
              >
                {isStreaming ? (
                  <Square size={18} />
                ) : (
                  <ArrowUp size={18} />
                )}
              </button>
            </div>
          </div>
          
          <div className="flex justify-center mt-3">
            <p className="text-xs text-gray-500">
              {currentModel 
                ? 'Ollama can make mistakes. Consider checking important information.'
                : 'Select a model from the dropdown above to start chatting'
              }
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
