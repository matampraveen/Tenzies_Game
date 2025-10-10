import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // REMOVE base if set, or set it to '/'
  // base: '/', // best to just not set base for Vercel!
})

