/**
 * Vite configuration file
 *
 * Configures React plugin and optimizes build settings
 * Source: https://vitejs.dev/config/
 */
const { defineConfig } = require('vite');
const react = require('@vitejs/plugin-react');

module.exports = defineConfig({
  plugins: [react()],
  server: {
    open: true,
    // Uncomment to expose to network:
    // host: true
  },
  // Optimize build output
  build: {
    minify: 'terser',
    sourcemap: true,
    // Uncomment to enable chunking:
    // chunkSizeWarningLimit: 1000,
  },
  // Base path for GitHub Pages deployment:
  // base: '/portfolio-website/',
});
