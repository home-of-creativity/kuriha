import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export default defineConfig({
  base: process.env.VITE_BASE || '/',
  plugins: [react()],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
      '@images': resolve(__dirname, './src/assets/images'),
      '@brand': resolve(__dirname, './src/assets/brand'),
      '@clients': resolve(__dirname, './src/assets/clients'),
    },
  },
});
