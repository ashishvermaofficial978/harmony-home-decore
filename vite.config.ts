import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  server: {
    headers: {
      'Strict-Transport-Security': 'max-age=31536000; includeSubDomains',
      'Content-Security-Policy': "default-src 'self'; img-src 'self' https://images.pexels.com https://*.google.com https://*.doubleclick.net data:; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://*.google.com https://*.doubleclick.net https://*.googleadservices.com https://*.googlesyndication.com; frame-src 'self' https://*.google.com https://*.doubleclick.net; connect-src 'self' https://*.google.com https://*.doubleclick.net https://*.googleadservices.com https://*.googlesyndication.com;",
      'X-Frame-Options': 'SAMEORIGIN',
      'Permissions-Policy': 'camera=(), microphone=(), geolocation=()',
      'X-Content-Type-Options': 'nosniff',
      'Referrer-Policy': 'strict-origin-when-cross-origin'
    }
  },
  build: {
    sourcemap: true,
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          'ui-vendor': ['lucide-react', 'framer-motion']
        }
      }
    }
  }
});