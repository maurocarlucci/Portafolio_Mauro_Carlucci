import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Descomenta y ajusta el base path si vas a publicar en GitHub Pages
  // base: '/nombre-repositorio/',
})
