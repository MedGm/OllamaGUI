import { Bot, User, Copy, Check } from 'lucide-react'
import { useState } from 'react'
import type { ChatMessage } from '../store/chatStore'
import Markdown from '../lib/markdown'

interface MessageProps {
  message: ChatMessage
}

export default function Message({ message }: MessageProps) {
  const [copied, setCopied] = useState(false)
  
  // Debug re-renders
  console.log('´Message component render:', message.id, 'content length:', message.content.length, 'isStreaming:', message.isStreaming)
  
  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(message.content)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (error) {
      console.error('Failed to copy:', error)
    }
  }
  
  const isUser = message.role === 'user'
  
  return (
    <div className={`w-full flex items-start gap-6 py-8 ${isUser ? 'bg-gray-50/50' : 'bg-white'} group border-b border-gray-100/50 last:border-b-0`}>
      {/* Avatar */}
      <div className={`w-10 h-10 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-sm ${
        isUser 
          ? 'bg-gradient-to-br from-blue-600 to-blue-700' 
          : 'bg-gradient-to-br from-gray-900 to-gray-700'
      }`}>
        {isUser ? (
          <User size={20} className="text-white" />
        ) : (
          <Bot size={20} className="text-white" />
        )}
      </div>
      
      {/* Content */}
      <div className="flex-1 min-w-0">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <div className={`text-sm font-semibold mb-3 ${
              isUser ? 'text-blue-900' : 'text-gray-900'
            }`}>
              {isUser ? 'You' : 'Assistant'}
            </div>
            
            <div className="prose prose-base max-w-none text-gray-900 leading-relaxed">
              <Markdown content={message.content} />
              {message.isStreaming && (
                <span className="inline-block w-2 h-5 bg-gray-400 animate-pulse ml-1 rounded-full"></span>
              )}
            </div>
          </div>
          
          {/* Copy button */}
          {!isUser && message.content && (
            <button
              onClick={copyToClipboard}
              className="opacity-0 group-hover:opacity-100 p-2.5 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-xl transition-all ml-4"
              title="Copy message"
            >
              {copied ? <Check size={18} /> : <Copy size={18} />}
            </button>
          )}
        </div>
      </div>
    </div>
  )
}