import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://sercankara.dev',
  output: 'static',
  build: {
    inlineStylesheets: 'always',
  },
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
  ],
});
