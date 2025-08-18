mod commands;
mod db;

#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
  tauri::Builder::default()
    .plugin(tauri_plugin_shell::init())
    .invoke_handler(tauri::generate_handler![
      commands::sys::server_health,
      commands::chat::chat_stream,
      commands::chat::abort_chat,
  commands::models::models_list,
  commands::models::model_pull,
  commands::models::model_delete,
  commands::models::model_show
  ,commands::settings::settings_get
  ,commands::settings::settings_set
  ,commands::db::db_create_chat
  ,commands::db::db_append_message
  ,commands::db::db_list_chats
  ,commands::db::db_list_messages
  ,commands::db::db_delete_chat
  ,commands::db::db_set_chat_model
  ,commands::db::db_list_chats_with_flags
    ])
    .setup(|app| {
      if cfg!(debug_assertions) {
        app.handle().plugin(
          tauri_plugin_log::Builder::default()
            .level(log::LevelFilter::Info)
            .build(),
        )?;
      }
      Ok(())
    })
    .run(tauri::generate_context!())
    .expect("error while running tauri application");
}
