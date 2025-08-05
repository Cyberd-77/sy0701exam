import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // IMPORTANT: Replace 'YOUR_REPOSITORY_NAME' with the actual name of your GitHub repository
  // For example, if your repo is `https://github.com/Dante/my-security-quiz`, then base should be '/my-security-quiz/'
  base: '/sy0701exam/',
})
