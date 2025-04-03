import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // base: "/geolocation/"
  test: {
    globals: true,
    environment: "jsdom",  // 👈 Para pruebas en React con DOM simulado
    setupFiles: "./setupTests.js",
  }
})
