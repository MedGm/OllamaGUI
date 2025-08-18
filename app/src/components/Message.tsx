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
  console.log('🔄 Message component render:', message.id, 'content length:', message.content.length, 'isStreaming:', message.isStreaming)
  
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
    <div className={`flex items-start gap-4 p-6 ${isUser ? 'bg-gray-50' : 'bg-white'} group`}>
      {/* Avatar */}
      <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
        isUser ? 'bg-blue-600' : 'bg-black'
      }`}>
        {isUser ? (
          <User size={16} className="text-white" />
        ) : (
          <Bot size={16} className="text-white" />
        )}
      </div>
      
      {/* Content */}
      <div className="flex-1 min-w-0">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <div className={`text-sm font-medium mb-1 ${
              isUser ? 'text-blue-900' : 'text-gray-900'
            }`}>
              {isUser ? 'You' : 'Assistant'}
            </div>
            
            <div className="prose prose-sm max-w-none text-gray-900 leading-relaxed">
              <Markdown content={message.content} />
              {message.isStreaming && (
                <span className="inline-block w-2 h-4 bg-gray-400 animate-pulse ml-1"></span>
              )}
            </div>
          </div>
          
          {/* Copy button */}
          {!isUser && message.content && (
            <button
              onClick={copyToClipboard}
              className="opacity-0 group-hover:opacity-100 p-2 text-gray-400 hover:text-gray-600 transition-all ml-2"
              title="Copy message"
            >
              {copied ? <Check size={16} /> : <Copy size={16} />}
            </button>
          )}
        </div>
      </div>
    </div>
  )
}