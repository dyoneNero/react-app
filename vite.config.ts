import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  envDir: ".env",
  resolve: {
    alias: {
      app: '/src/app',
      store: '/src/app/store',
      pages: '/src/pages',
      widjets: '/src/widjets',
      features: '/src/features',
      entities: '/src/entities',
      shared: '/src/shared',
    }
  }
})
