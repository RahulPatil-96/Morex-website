import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import { fileURLToPath, URL } from 'node:url'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('.', import.meta.url)),
      '@/components': fileURLToPath(new URL('./Components', import.meta.url)),
      '@/lib': fileURLToPath(new URL('./lib', import.meta.url)),
    },
  },
})
