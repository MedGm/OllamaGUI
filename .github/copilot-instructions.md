# Copilot Instructions for Ollama Linux GUI

## Project Overview

This is a **Tauri 2 + React 19** desktop application providing a native Linux GUI for Ollama. The architecture follows a **thin-frontend / native-bridge pattern** where React handles UI/UX while Rust (Tauri) owns streaming, persistence, and system integration.

**Core Philosophy**: Keep the frontend lightweight and event-driven, with all heavy operations (HTTP streaming, SQLite, file I/O) handled in Rust through well-defined IPC commands.

## Architecture Patterns

### 1. Streaming Communication
- **NDJSON-based streaming**: All real-time operations use line-delimited JSON over HTTP streams
- **Event correlation**: Each stream gets a unique `stream_id` (UUID) for frontend-backend correlation
- **Event lifecycle**: `start` → `chunk`/`progress` → `complete`/`error` → cleanup

### 2. IPC Command Surface
All frontend-backend communication goes through Tauri commands:

```rust
// Chat operations
chat_stream(request, server_url?) -> ChatResponse + events
abort_chat() -> Result<(), String>

// Models operations  
models_list() -> { models: [...] }
model_pull(name) -> events + Result
model_delete(name) -> boolean
model_show(name) -> model details

// Database operations
db_create_chat(model?, system_prompt?, params_json?) -> ChatMeta
db_append_message(chat_id, role, content, meta_json?) -> MessageRow
db_list_chats(limit?) -> ChatMeta[]
db_list_messages(chat_id, limit?) -> MessageRow[]
db_delete_chat(chat_id) -> boolean
db_set_chat_model(chat_id, model) -> boolean
db_list_chats_with_flags(limit?) -> ChatMeta[] with has_messages

// Settings & System
settings_get() / settings_set(config)
server_health(url?) -> { connected, url, error? }
```

### 3. Event System
Events flow from Rust → React via Tauri's event emitter:

```typescript
// Chat streaming events
"chat:stream-start" -> { stream_id }
"chat:chunk" -> { stream_id, message, done, metrics... }
"chat:complete" -> { stream_id, completed }
"chat:error" -> { stream_id, error }
"chat:cancelled" -> { stream_id }

// Model operations events
"models:pull-start" -> { name }
"models:pull-progress" -> { name, status, completed, total }
"models:pull-complete" -> { name }
"models:pull-error" -> { name, error }

// Custom UI events
"chats-refresh" -> browser event for sidebar refresh
```

### 4. State Management (Zustand)
Three main stores handle application state:

- **`chatStore.ts`**: Chat messages, streaming state, current chat/model
- **`modelsStore.ts`**: Model list, pull operations, model metadata  
- **`settingsStore.ts`**: User preferences, server URL, theme, defaults

**Pattern**: Stores register event listeners in their initializers and clean up on unmount.

### 5. Persistence (SQLite)
- **Location**: `~/.config/ollama-gui/app.db`
- **Configuration**: WAL mode, `PRAGMA foreign_keys=ON`
- **Schema**:
  ```sql
  chats(id, created_at, updated_at, model, system_prompt, params_json)
  messages(id, chat_id, role, content, created_at, meta_json) ON DELETE CASCADE
  ```
- **Pattern**: All database operations are async and go through `src-tauri/src/commands/db.rs`

## File Structure & Key Modules

### Rust Backend (`src-tauri/src/`)
```
├── commands/
│   ├── chat.rs      # Streaming chat via Ollama API
│   ├── models.rs    # Model management (list/pull/delete/show)
│   ├── db.rs        # SQLite CRUD operations
│   ├── settings.rs  # JSON file-based settings
│   └── sys.rs       # System health checks
├── db/mod.rs        # SQLite connection pool & migrations
└── lib.rs           # Tauri app setup & command registration
```

### React Frontend (`app/src/`)
```
├── store/
│   ├── chatStore.ts     # Chat state & streaming lifecycle
│   ├── modelsStore.ts   # Model operations & progress
│   └── settingsStore.ts # Settings persistence
├── components/
│   ├── TopBar.tsx       # Model picker, settings
│   ├── Sidebar.tsx      # Chat history navigation
│   ├── MainPanel.tsx    # Chat interface
│   └── Message.tsx      # Individual message rendering
└── App.tsx              # Layout & store initialization
```

## Key Implementation Patterns

### Streaming Chat Implementation
```rust
// Rust: Generate unique stream ID and register cancellation handler
let stream_id = Uuid::new_v4().to_string();
let should_cancel = Arc::new(AtomicBool::new(false));
ACTIVE_STREAMS.insert(stream_id.clone(), should_cancel.clone());

// Process NDJSON stream with buffer management
while let Some(chunk) = stream.next().await {
    buffer.push_str(&chunk_str);
    while let Some(pos) = buffer.find('\n') {
        let line = buffer[..pos].trim();
        match serde_json::from_str::<ChatChunk>(&line) {
            Ok(chat_chunk) => {
                app.emit("chat:chunk", json!({
                    "stream_id": stream_id,
                    "message": chat_chunk.message,
                    "done": chat_chunk.done,
                    // ... metrics
                }));
            }
        }
    }
}
```

```typescript
// React: Register listeners before invoking command
const streamId = useRef<string | null>(null);

useEffect(() => {
  const unlistenChunk = await listen('chat:chunk', (event) => {
    const { stream_id, message, done } = event.payload;
    if (stream_id === streamId.current) {
      updateStreamingMessage(messageId, currentContent + message.content);
      if (done) setStreaming(false);
    }
  });
  
  return () => { unlistenChunk(); };
}, []);

// Invoke command and track stream ID
const response = await invoke('chat_stream', { request });
```

### Database Transaction Pattern
```rust
#[tauri::command]
pub async fn db_append_message(chat_id: String, role: String, content: String) -> Result<MessageRow, String> {
    let pool = get_pool().await?;
    let id = Uuid::new_v4().to_string();
    let now = chrono::Utc::now().timestamp_millis();
    
    // Insert message
    sqlx::query("INSERT INTO messages (id, chat_id, role, content, created_at) VALUES (?,?,?,?,?)")
        .bind(&id).bind(&chat_id).bind(&role).bind(&content).bind(now)
        .execute(&pool).await
        .map_err(|e| format!("append message failed: {}", e))?;
    
    // Update chat timestamp
    touch_chat_updated(&pool, &chat_id).await?;
    
    Ok(MessageRow { id, chat_id, role, content, created_at: now, meta_json: None })
}
```

### Settings Persistence Pattern
```rust
// Rust: JSON file-based settings in ~/.config/ollama-gui/
#[tauri::command]
pub async fn settings_get() -> Result<Settings, String> {
    let path = settings_path()?;
    if !path.exists() {
        return Ok(Settings::default());
    }
    let data = fs::read_to_string(path).map_err(|e| e.to_string())?;
    serde_json::from_str(&data).map_err(|e| e.to_string())
}
```

```typescript
// React: Zustand store with IPC sync
interface SettingsState {
  serverUrl: string;
  theme: string;
  load: () => Promise<void>;
  save: () => Promise<void>;
}

const useSettingsStore = create<SettingsState>((set, get) => ({
  load: async () => {
    const settings = await invoke('settings_get');
    set(settings);
  },
  save: async () => {
    const state = get();
    await invoke('settings_set', { settings: state });
  }
}));
```

## Development Guidelines

### 1. Error Handling
- **Rust**: Return `Result<T, String>` from all commands; use `map_err()` for error conversion
- **React**: Handle command failures gracefully with toast notifications or inline errors
- **Streaming**: Always emit error events; let frontend decide how to handle them

### 2. Performance Considerations
- **Large responses**: Truncate debug logs (>400 chars) to avoid console spam
- **React re-renders**: Use Zustand's selective subscriptions; avoid deep object mutations
- **SQLite**: Use prepared statements; enable WAL mode; limit query result sizes

### 3. Testing Patterns
- **Rust**: Unit test individual commands with mock data
- **React**: Test store actions and event handling logic
- **Integration**: Test full IPC flows with real Ollama server

### 4. Security Notes
- **CSP**: Network access only through registered Tauri commands
- **File access**: Restricted to app data directory (`~/.config/ollama-gui/`)
- **Default server**: `localhost:11434` (user configurable)

## Common Debugging Patterns

### Stream Correlation Issues
```rust
// Always log stream IDs for debugging
println!("Starting stream with ID: {}", stream_id);
println!("Stream processing finished. Completed: {} (ID: {})", stream_completed, stream_id);
```

### React State Updates
```typescript
// Force re-renders for complex state updates
set(state => ({ 
  messages: newMessages,
  updateCounter: state.updateCounter + 1,
  lastUpdate: Date.now()
}));
```

### SQLite Connection Issues
```rust
// Connection pooling with lazy initialization
lazy_static! {
    static ref POOL: Mutex<Option<SqlitePool>> = Mutex::new(None);
}

pub async fn get_pool() -> Result<SqlitePool, String> {
    let mut pool = POOL.lock().await;
    if pool.is_none() {
        *pool = Some(create_pool().await?);
    }
    Ok(pool.as_ref().unwrap().clone())
}
```

## Extension Points

The codebase is designed for extensibility:

1. **New Commands**: Add to `src-tauri/src/commands/` and register in `lib.rs`
2. **New Events**: Emit from Rust, listen in React stores
3. **New Settings**: Extend `Settings` struct and update UI forms
4. **New Models**: Extend database schema with migrations
5. **New Integrations**: Follow the command + event pattern for external APIs

## Current Version: v0.1.4
- ✅ Linux packaging (AppImage, deb, rpm) via GitHub Actions
- ✅ Streaming chat with cancellation support
- ✅ Model management with progress tracking
- ✅ SQLite persistence with cascade deletes
- ✅ Settings persistence and theme support

When contributing, maintain the thin-frontend philosophy and ensure all heavy operations remain in the Rust layer.
