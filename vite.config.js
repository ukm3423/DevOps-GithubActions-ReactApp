// vite.config.js
import { defineConfig } from 'vite';
import reactRefresh from '@vitejs/plugin-react-refresh';
import tailwindcss from 'tailwindcss';

export default defineConfig({
  plugins: [
    reactRefresh(),
    tailwindcss('./tailwind.config.js'),
  ],
  build: {
    outDir: 'dist', // Ensure this matches the path in your GitHub Actions workflow
  },
});
