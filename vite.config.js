
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    allowedHosts: ['localhost', 'b90d6f7d77c1.ngrok-free.app'],
    // The above list can include all hosts you want to allow
  },
});
