import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://singu.online',
  vite: { plugins: [tailwindcss()] },
});
