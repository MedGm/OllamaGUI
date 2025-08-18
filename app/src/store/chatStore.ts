import { create } from 'zustand'
import { invoke } from '@tauri-apps/api/core'
import { listen } from '@tauri-apps/api/event'

export interface ChatMessage {
  id: string
  role: 'user' | 'assistant' | 'system'
  content: string
  timestamp: number
  isStreaming?: boolean
}

export interface ChatOptions {
  temperature?: number
  topK?: number
  topP?: number
  maxTokens?: number
}

interface ChatState {
  messages: ChatMessage[]
  currentChatId: string | null
  currentModel: string
  isStreaming: boolean
  streamingMessageId: string | null
  currentStreamId: string | null  // Track current stream ID
  updateCounter: number  // Force re-render counter
  lastUpdate: number  // Timestamp for updates
  
  // Actions
  setCurrentModel: (model: string) => void
  setCurrentChatId: (chatId: string | null) => void
  createNewChat: (opts?: { model?: string; systemPrompt?: string; paramsJson?: string }) => Promise<string | null>
  loadChat: (chatId: string) => Promise<boolean>
  addMessage: (message: Omit<ChatMessage, 'id' | 'timestamp'>) => string
  updateMessage: (id: string, content: string) => void
  updateStreamingMessage: (id: string, content: string) => void
  setStreaming: (isStreaming: boolean, messageId?: string, streamId?: string) => void
  sendMessage: (content: string, options?: ChatOptions) => Promise<void>
  stopStreaming: () => void
  clearMessages: () => void
}

export const useChatStore = create<ChatState>((set, get) => ({
  messages: [],
  currentChatId: null,
  currentModel: '',
  isStreaming: false,
  streamingMessageId: null,
  currentStreamId: null,
  updateCounter: 0,
  lastUpdate: 0,

  setCurrentModel: (model) => set({ currentModel: model }),
  setCurrentChatId: (chatId) => set({ currentChatId: chatId }),
  
  createNewChat: async (opts) => {
    try {
      const res = await invoke<any>('db_create_chat', {
        model: (opts?.model ?? get().currentModel) || null,
        systemPrompt: opts?.systemPrompt ?? null,
        paramsJson: opts?.paramsJson ?? null,
      })
      const chatId = res?.id as string
      set({ currentChatId: chatId, messages: [] })
      return chatId
    } catch (e) {
      console.error('db_create_chat failed', e)
      return null
    }
  },
  
  loadChat: async (chatId: string) => {
    try {
      const state = get()
      if (state.isStreaming) {
        await state.stopStreaming()
      }
  const rows = await invoke<any>('db_list_messages', { chatId, limit: 1000 })
      const msgs: ChatMessage[] = (rows as any[]).map((r) => ({
        id: r.id,
        role: (r.role as 'user' | 'assistant' | 'system'),
        content: r.content,
        timestamp: Number(r.created_at) || Date.now(),
      }))
      set({ currentChatId: chatId, messages: msgs })
      return true
    } catch (e) {
      console.error('db_list_messages failed', e)
      return false
    }
  },
  
  addMessage: (message) => {
    const id = `msg_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
    const newMessage: ChatMessage = {
      ...message,
      id,
      timestamp: Date.now(),
    }
    set((state) => ({ messages: [...state.messages, newMessage] }))
    return id
  },
  
  updateMessage: (id, content) => {
    set((state) => {
      const messageIndex = state.messages.findIndex(msg => msg.id === id)
      if (messageIndex === -1) {
        console.warn(`Message with id ${id} not found`)
        return state
      }
      
      // Create completely new array and objects to force React re-render
      const newMessages = state.messages.map((msg, index) => {
        if (index === messageIndex) {
          return {
            id: msg.id,
            role: msg.role,
            content: content,
            timestamp: msg.timestamp,
            isStreaming: false
          }
        }
        return { ...msg } // Also clone other messages to be safe
      })
      
      console.log('🔄 Force updating final message:', id, 'content length:', content.length)
      
      return { 
        messages: newMessages,
        updateCounter: state.updateCounter + 1,
        lastUpdate: Date.now()
      }
    })
  },
  
  updateStreamingMessage: (id, content) => {
    set((state) => {
      const messageIndex = state.messages.findIndex(msg => msg.id === id)
      if (messageIndex === -1) {
        console.warn(`Streaming message with id ${id} not found`)
        return state
      }
      
      // Create completely new array and objects to force React re-render
      const newMessages = state.messages.map((msg, index) => {
        if (index === messageIndex) {
          return {
            id: msg.id,
            role: msg.role,
            content: content,
            timestamp: msg.timestamp,
            isStreaming: true
          }
        }
        return { ...msg } // Also clone other messages to be safe
      })
      
      console.log('🔄 Force updating streaming message:', id, 'content length:', content.length)
      
      return { 
        messages: newMessages,
        updateCounter: state.updateCounter + 1,
        lastUpdate: Date.now()
      }
    })
  },
  
  setStreaming: (isStreaming, messageId, streamId) => {
    set({ 
      isStreaming, 
      streamingMessageId: messageId || null,
      currentStreamId: streamId || null
    })
  },
  
  sendMessage: async (content, options) => {
    const state = get()
    
    if (state.isStreaming) {
      console.warn('Already streaming, stopping current stream first')
      await state.stopStreaming()
      // Wait a bit for cleanup
      await new Promise(resolve => setTimeout(resolve, 100))
    }
    
    if (!state.currentModel) {
      console.error('No model selected')
      return
    }
    
    // Ensure we have a chat in DB
    if (!state.currentChatId) {
      await get().createNewChat({ model: state.currentModel })
    }

    // Add user message (UI)
    state.addMessage({
      role: 'user',
      content: content.trim(),
    })
    // Persist user message
    const chatId = get().currentChatId
  if (chatId) {
      try {
        // Ensure chat has model set in DB
        if (state.currentModel) {
          invoke('db_set_chat_model', { chatId, model: state.currentModel }).catch(() => {})
        }
        await invoke('db_append_message', { chatId, role: 'user', content: content.trim(), metaJson: null })
  // Inform listeners (Sidebar) to refresh chats ordering
  window.dispatchEvent(new CustomEvent('chats-refresh'))
      } catch (e) {
        console.warn('db_append_message (user) failed', e)
      }
    }
    
    // Add assistant message placeholder
    const assistantMessageId = state.addMessage({
      role: 'assistant',
      content: '',
      isStreaming: true,
    })
    
    let currentStreamId: string | null = null
    // Don't set streaming yet - wait for event listeners
    
    let unlistenChunk: (() => void) | null = null
    let unlistenError: (() => void) | null = null
    let unlistenComplete: (() => void) | null = null
    let unlistenStreamStart: (() => void) | null = null
    let unlistenCancelled: (() => void) | null = null
    
    const cleanup = () => {
      console.log('Cleaning up event listeners for message:', assistantMessageId)
      if (unlistenChunk) unlistenChunk()
      if (unlistenError) unlistenError()
      if (unlistenComplete) unlistenComplete()
      if (unlistenStreamStart) unlistenStreamStart()
      if (unlistenCancelled) unlistenCancelled()
    }
    
    try {
      let persisted = false
      console.log('Setting up event listeners for message:', assistantMessageId)
      // Listen for stream start to get stream ID
      unlistenStreamStart = await listen('chat:stream-start', (event: any) => {
        const { stream_id } = event.payload as { stream_id: string }
        console.log('Stream started with ID:', stream_id)
        currentStreamId = stream_id
        const currentState = get()
        currentState.setStreaming(true, assistantMessageId, stream_id)
      })
      
      // Listen for cancellation
      unlistenCancelled = await listen('chat:cancelled', (event: any) => {
        const { stream_id } = event.payload as { stream_id: string }
        console.log('Stream cancelled:', stream_id)
        if (stream_id === currentStreamId) {
          const currentState = get()
          currentState.setStreaming(false)
          cleanup()
        }
      })
      // Set up event listeners for streaming
      unlistenChunk = await listen('chat:chunk', (event: any) => {
        const chunk = event.payload as { message?: { role?: string; content?: string }; done?: boolean }
        console.log('🟢 CHUNK RECEIVED for message:', assistantMessageId, 'chunk:', chunk)
        
        // Only process chunks for the currently streaming assistant message
        const currentState = get()
        if (currentState.streamingMessageId !== assistantMessageId) {
          console.warn('⚠️ Ignoring chunk from different message stream')
          return
        }
        
        const part = chunk?.message?.content ?? ''
        if (part.length > 0) {
          const currentMessage = currentState.messages.find(m => m.id === assistantMessageId)
          if (currentMessage) {
            const newContent = (currentMessage.content || '') + part
            console.log('📝 Updating message content, total length:', newContent.length)
            currentState.updateStreamingMessage(assistantMessageId, newContent)
          } else {
            console.error('❌ Could not find message with ID:', assistantMessageId)
          }
        }
        
        // If the provider sends a done=true with no content, we must still finalize
        if (chunk?.done) {
          console.log('✅ Chunk marked as done, stopping stream (finalize message)')
          const finalState = get()
          finalState.setStreaming(false)
          const currentMessage = finalState.messages.find(m => m.id === assistantMessageId)
          if (currentMessage) {
            finalState.updateMessage(assistantMessageId, currentMessage.content || '')
            // Persist assistant message once
            if (!persisted && chatId) {
              invoke('db_append_message', { chatId, role: 'assistant', content: currentMessage.content || '', metaJson: null })
                .then(() => window.dispatchEvent(new CustomEvent('chats-refresh')))
                .catch((e) => console.warn('db_append_message (assistant) failed', e))
              persisted = true
            }
          }
          cleanup()
        }
      })
      
      unlistenError = await listen('chat:error', (event: any) => {
        console.error('Chat error:', event.payload)
        const payload = event.payload as { stream_id?: string; error?: string }
        if (payload?.stream_id && payload.stream_id !== currentStreamId) {
          console.warn('Ignoring error from different stream:', payload.stream_id)
          return
        }
        state.setStreaming(false)
        
        // Don't replace content if we already have some response
        const currentMessage = get().messages.find(m => m.id === assistantMessageId)
        if (currentMessage && currentMessage.content.trim()) {
          // Just stop streaming, keep existing content
          state.updateMessage(assistantMessageId, currentMessage.content)
        } else {
          // No content yet, show error
          state.updateMessage(assistantMessageId, `Error: ${payload?.error || 'Failed to get response from model'}`)
        }
        cleanup()
      })
      
      unlistenComplete = await listen('chat:complete', (event: any) => {
        const payload = event.payload as { completed: boolean; stream_id?: string }
        console.log('Stream completion event:', payload)
        
        // Only process completion for the current stream
        if (payload.stream_id && payload.stream_id !== currentStreamId) {
          console.warn('Ignoring completion from different stream:', payload.stream_id)
          return
        }
        
        if (!payload.completed) {
          console.warn('Stream completed but not successfully')
        }
        
        // Always stop streaming when we get completion signal for our stream
        const currentState = get()
        if (currentState.isStreaming && currentState.streamingMessageId === assistantMessageId) {
          console.log('Stopping stream due to completion event')
          currentState.setStreaming(false)
          
          // Remove isStreaming flag from the message using updateMessage
          const currentMessage = currentState.messages.find(m => m.id === assistantMessageId)
          if (currentMessage) {
            currentState.updateMessage(assistantMessageId, currentMessage.content)
            // Persist assistant message once if not yet persisted
            if (!persisted && chatId) {
              invoke('db_append_message', { chatId, role: 'assistant', content: currentMessage.content || '', metaJson: null })
                .then(() => window.dispatchEvent(new CustomEvent('chats-refresh')))
                .catch((e) => console.warn('db_append_message (assistant) failed', e))
              persisted = true
            }
          }
        }
        cleanup()
      })
      
  // NOW set streaming state after all listeners are ready (before invoke)
  console.log('🚀 Starting streaming with all listeners ready')
  state.setStreaming(true, assistantMessageId)
      
  // Prepare messages for API from a fresh snapshot to avoid stale state
  const latest = get()
  const apiMessages = latest.messages
        .filter(msg => msg.role !== 'assistant' || msg.content.trim() !== '')
        .map(msg => ({
          role: msg.role,
          content: msg.content,
        }))
      
      // Send the chat request
      const result = await invoke('chat_stream', {
        request: {
          model: state.currentModel,
          messages: apiMessages,
          stream: true,
          options: options ? {
            temperature: options.temperature,
            top_k: options.topK,
            top_p: options.topP,
            max_tokens: options.maxTokens,
          } : undefined,
        },
      })
      
  console.log('Chat stream result:', result)
      
      // Add a timeout safety net
      setTimeout(() => {
        const currentState = get()
        if (currentState.isStreaming && currentState.streamingMessageId === assistantMessageId) {
          console.warn('Stream timeout, stopping...')
          currentState.setStreaming(false)
          cleanup()
        }
      }, 60000) // 60 second timeout
      
    } catch (error) {
      console.error('Failed to send message:', error)
      state.setStreaming(false)
      state.updateMessage(assistantMessageId, `Error: ${error}`)
      cleanup()
    }
  },
  
  stopStreaming: async () => {
    const state = get()
    if (state.isStreaming) {
      try {
        await invoke('abort_chat')
        console.log('Chat streaming stopped')
        state.setStreaming(false)
      } catch (error) {
        console.error('Failed to stop streaming:', error)
        // Force stop anyway
        state.setStreaming(false)
      }
    }
  },
  
  clearMessages: () => {
  set({ messages: [], isStreaming: false, streamingMessageId: null })
  },
}))