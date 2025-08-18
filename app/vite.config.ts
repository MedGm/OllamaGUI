import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  
  // Tauri expects a fixed port, and this prevents the dev server from running on a random port
  clearScreen: false,
  server: {
    port: 5173,
    strictPort: true,
    watch: {
      // 3. tell vite to ignore watching `src-tauri`
      ignored: ["**/src-tauri/**"],
    },
  },
  
  // Env variables that start with TAURI_ should be accessible from the frontend
  envPrefix: ["VITE_", "TAURI_"],
  
  build: {
    // Tauri supports es2021
    target: process.env.TAURI_DEBUG ? "esnext" : "es2021",
    // don't minify for debug builds
    minify: !process.env.TAURI_DEBUG ? "esbuild" : false,
    // produce sourcemaps for debug builds
    sourcemap: !!process.env.TAURI_DEBUG,
  },
})
