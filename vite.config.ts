import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import { fileURLToPath, URL } from 'node:url';

// https://vite.dev/config/
export default defineConfig({
  // Served from a project subpath on GitHub Pages, so assets must be
  // requested relative to /ai-music-generator/.
  base: '/ai-music-generator/',
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      // `@` points at src/, so components import UI primitives as '@/components/ui'.
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
});
