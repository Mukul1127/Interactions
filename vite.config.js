const { resolve } = require('path')
const { defineConfig } = require('vite')

module.exports = defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        keys: resolve(__dirname, 'Keys.html'),
        visualizer: resolve(__dirname, '3D.html')
      }
    }
  }
})