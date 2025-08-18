import { Settings, Database, Plus, Search, Bot, Trash2 } from 'lucide-react'
import { useEffect, useMemo, useState } from 'react'
import { useUIStore } from '../store/uiStore'
import { invoke } from '@tauri-apps/api/core'
import { useChatStore } from '../store/chatStore'

type ChatMeta = {
  id: string
  created_at: number
  updated_at: number
  model?: string | null
  system_prompt?: string | null
  has_messages?: boolean
}

export default function Sidebar() {
  const [searchQuery, setSearchQuery] = useState('')
  const [chats, setChats] = useState<ChatMeta[]>([])
  const [previews, setPreviews] = useState<Record<string, string>>({})
  const { loadChat, createNewChat, currentChatId } = useChatStore()
  const { setView } = useUIStore()

  const refreshChats = async () => {
    try {
  const rows = await invoke<any>('db_list_chats_with_flags', { limit: 200 })
      setChats(rows as ChatMeta[])
      // Load a short preview for each chat (best-effort)
      const list = rows as ChatMeta[]
      const entries: Record<string, string> = {}
      for (const c of list) {
        try {
          if (!c.has_messages) continue
          const msgs = await invoke<any[]>('db_list_messages', { chatId: c.id, limit: 1 })
          if (Array.isArray(msgs) && msgs.length > 0) {
            const m = msgs[0] as any
            const raw = String(m.content || '')
            const oneLine = raw.replace(/\s+/g, ' ').trim()
            const trimmed = oneLine.length > 80 ? oneLine.slice(0, 80) + '…' : oneLine
            entries[c.id] = trimmed
          }
        } catch {}
      }
      setPreviews(entries)
    } catch (e) {
      console.warn('db_list_chats failed', e)
      setChats([])
    }
  }

  useEffect(() => {
    refreshChats()
    const onRefresh = () => refreshChats()
    window.addEventListener('chats-refresh', onRefresh as EventListener)
    return () => window.removeEventListener('chats-refresh', onRefresh as EventListener)
  }, [])

  // simple filter by model or id
  const filtered = useMemo(() => {
    const q = searchQuery.trim().toLowerCase()
    if (!q) return chats
    return chats.filter(c => (c.model || '').toLowerCase().includes(q) || c.id.toLowerCase().includes(q))
  }, [searchQuery, chats])
  
  return (
  <div className="w-72 bg-gray-50 border-r border-gray-200 flex flex-col overflow-hidden">
      {/* Header with Ollama Logo */}
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center">
            <Bot size={20} className="text-white" />
          </div>
          <h1 className="text-xl font-semibold text-gray-900">Ollama</h1>
        </div>
        
        {/* New Chat Button */}
        <button
          onClick={async () => {
            const { messages } = useChatStore.getState()
            // Prevent creating a new chat if the current chat is empty (no messages)
            if (currentChatId && messages.length === 0) {
              alert('Finish or start a conversation in the current chat before creating a new one.')
              return
            }
            // If no currentChatId, ensure the most recent chat is not empty either
            if (!currentChatId && chats.length > 0) {
              try {
                const latest = chats[0]
                const rows = await invoke<any>('db_list_messages', { chatId: latest.id, limit: 1 })
                if (Array.isArray(rows) && rows.length === 0) {
                  alert('Your most recent chat is empty. Send a message first before creating a new chat.')
                  return
                }
              } catch {}
            }
            const id = await createNewChat()
            if (id) {
              await refreshChats()
              setView('chat')
            }
          }}
          className="w-full flex items-center gap-3 px-4 py-3 bg-black hover:bg-gray-800 text-white rounded-lg transition-colors font-medium"
        >
          <Plus size={18} />
          New chat
        </button>
      </div>
      
      {/* Search */}
      <div className="p-4">
        <div className="relative">
          <Search size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search conversations..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-3 py-2 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent text-sm"
          />
        </div>
      </div>
      
      {/* Chat List */}
  <div className="flex-1 overflow-y-auto px-4">
        <div className="space-y-1">
          {filtered.length === 0 ? (
            <div className="py-10 text-center text-gray-500">
              <div className="text-sm">No conversations yet</div>
              <div className="text-xs text-gray-400 mt-1">Start a new chat to see it here</div>
            </div>
          ) : (
            <div className="space-y-1">
              {filtered.map((c) => (
                <div key={c.id} className="flex items-center gap-2">
                  <button
                    onClick={async () => {
                      // If chat has a preferred model, set it
                      if (c.model) {
                        useChatStore.getState().setCurrentModel(c.model)
                      }
                      await loadChat(c.id)
                      setView('chat')
                    }}
                    className={`flex-1 min-w-0 text-left px-3 py-2 rounded-lg border transition-colors ${
                      currentChatId === c.id ? 'bg-white border-gray-300' : 'bg-gray-50 hover:bg-gray-100 border-transparent'
                    }`}
                  >
                    <div className="text-sm font-medium text-gray-900 truncate">{c.model || 'Untitled chat'}</div>
                    {previews[c.id] && (
                      <div className="text-xs text-gray-600 truncate block max-w-full">{previews[c.id]}</div>
                    )}
                    <div className="text-[10px] text-gray-400 truncate">{new Date(c.updated_at).toLocaleString()}</div>
                  </button>
                  <button
                    title={c.has_messages ? 'Delete chat' : 'Cannot delete an empty chat'}
                    className={`p-2 rounded ${c.has_messages ? 'text-gray-500 hover:text-red-600 hover:bg-red-50' : 'text-gray-300 cursor-not-allowed'}`}
                    onClick={async (e) => {
                      e.stopPropagation()
                      if (!c.has_messages) {
                        // Passive UX: do nothing if disabled
                        return
                      }
                      try {
                        const confirmDelete = confirm('Delete this chat? This cannot be undone.')
                        if (!confirmDelete) return
                        const ok = await invoke<boolean>('db_delete_chat', { chatId: c.id })
                        if (ok) {
                          await refreshChats()
                          if (currentChatId === c.id) {
                            // Reset current chat if it was the one deleted
                            useChatStore.getState().clearMessages()
                            useChatStore.getState().setCurrentChatId(null)
                          }
                        }
                      } catch (err) {
                        console.error('Delete chat failed', err)
                      }
                    }}
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      
      {/* Bottom Navigation */}
      <div className="p-4 border-t border-gray-200">
        <div className="space-y-1">
          <button onClick={() => setView('models')} className="w-full flex items-center gap-3 px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors text-sm">
            <Database size={18} />
            Manage models
          </button>
            <button onClick={() => setView('settings')} className="w-full flex items-center gap-3 px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors text-sm">
            <Settings size={18} />
            Settings
          </button>
        </div>
      </div>
    </div>
  )
}
