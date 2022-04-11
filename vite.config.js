const { resolve } = require('path')
const { defineConfig } = require('vite')

module.exports = defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        keys: resolve(__dirname, 'key.html'),
        3d: resolve(__dirname, '3d.html')
      }
    }
  }
})