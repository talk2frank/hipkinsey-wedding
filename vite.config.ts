import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/hipkinsey-wedding/', // Use relative paths for GitHub Pages may need to change if using a custom domain
  resolve: {
    alias: [],
  },
})