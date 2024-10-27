import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true,  // Esto permite conexiones externas
    port: 3001,  // Cambia el puerto si es necesario
  },
})
