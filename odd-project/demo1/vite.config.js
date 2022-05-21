import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
const path = require('path');

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    // 设置别名
    alias: {
      views: path.resolve(__dirname, 'src/views'),
      styles: path.resolve(__dirname, 'src/styles'),
      '@': path.resolve(__dirname, 'src'),
    },
  },
})
