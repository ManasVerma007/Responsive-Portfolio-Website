import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Add server configuration for SPA routing
  server: {
    historyApiFallback: true,
  },
  preview: {
    port: 5173,
    strictPort: true,
    // Also add for the preview server
    historyApiFallback: true,
  }
})