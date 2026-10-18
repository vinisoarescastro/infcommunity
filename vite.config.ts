import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Base relativa pra funcionar tanto na raiz do domínio quanto numa subpasta, tipo no GitHub Pages
export default defineConfig({
  plugins: [react()],
  base: './',
})
