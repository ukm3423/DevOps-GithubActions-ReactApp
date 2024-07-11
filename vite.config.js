import { defineConfig } from 'vite';

let viteConfig = {};

try {
  // Attempt to import the plugin
  const react = require('@vitejs/plugin-react').default;

  // If successful, define Vite configuration
  viteConfig = defineConfig({
    plugins: [react()],
    base: '/DevOps-GithubActions-ReactApp/'
  });
} catch (e) {
  // Log the error if the plugin import fails
  console.error('Failed to load @vitejs/plugin-react:', e);
}

export default viteConfig;
