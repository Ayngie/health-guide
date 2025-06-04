import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'
import { copyFileSync, existsSync } from 'fs'

export default defineConfig({
  base: '/health-guide/',
  plugins: [
    react(),
    {
      name: 'copy-index-to-404',
      closeBundle() {
        const from = resolve(__dirname, 'dist/index.html')
        const to = resolve(__dirname, 'dist/404.html')
        if (existsSync(from)) {
          copyFileSync(from, to)
          console.log('✔ Copied index.html to 404.html')
        }
      }
    }
  ],
})
