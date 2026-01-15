import { defineConfig } from 'vite'

export default defineConfig({
  base: './',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    manifest: true,
    rollupOptions: {
      input: {
        main: 'index.html',
        solutions: 'solutions.html',
        industries: 'industries.html',
        resources: 'resources.html',
        pricing: 'pricing.html',
        company: 'company.html'
      }
    }
  }
})
