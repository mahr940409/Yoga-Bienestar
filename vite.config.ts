import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    hmr: {
      // Disable WebSocket for HMR in WebContainer environment
      protocol: 'http',
      host: 'localhost',
      port: 5173
    }
  }
})