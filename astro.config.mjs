// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // TODO: update to the real production domain before deploying.
  site: 'https://tumbatumulta.co',
  trailingSlash: 'always',

  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [sitemap()]
});