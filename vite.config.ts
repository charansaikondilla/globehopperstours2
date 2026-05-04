import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Use environment variable to switch base for local vs GitHub Pages
const isProduction = process.env.NODE_ENV === 'production';

export default defineConfig({
  base: isProduction ? '/globehopperstours2/' : '/',
  publicDir: 'public',
  server: {
    port: 3000,
    host: '0.0.0.0',
  },
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom'],
          'router': ['react-router-dom'],
          'three-vendor': ['three', '@react-three/fiber', '@react-three/drei'],
          'motion': ['framer-motion'],
        },
      },
    },
    chunkSizeWarningLimit: 600,
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '.'),
    }
  }
});
