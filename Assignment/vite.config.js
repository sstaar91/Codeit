/* eslint-disable no-undef */
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'node:path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      { find: '@_assets', replacement: path.join(__dirname, 'src/assets') },
    ],
  },
});
