import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  const googleKey = env.VITE_GOOGLE_API_KEY || env.GOOGLE_API_KEY || '';

  return {
    base: process.env.VITE_BASE || '/',
    plugins: [react()],
    define: {
      'import.meta.env.VITE_GOOGLE_API_KEY': JSON.stringify(googleKey),
    },
    resolve: {
      alias: {
        '@': resolve(__dirname, './src'),
        '@images': resolve(__dirname, './src/assets/images'),
        '@brand': resolve(__dirname, './src/assets/brand'),
        '@clients': resolve(__dirname, './src/assets/clients'),
      },
    },
  };
});
