import { resolve } from 'node:path'
import path from 'path'

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
      '~app': path.resolve(__dirname, './src/app'),
      '~entities': path.resolve(__dirname, './src/entities'),
      '~features': path.resolve(__dirname, './src/features'),
      '~pages': path.resolve(__dirname, './src/pages'),
      '~widgets': path.resolve(__dirname, './src/widgets'),
      '~shared': path.resolve(__dirname, './src/shared'),
      '~types': path.resolve(__dirname, './src/types'),
    },
  },
})
