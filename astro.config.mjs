// @ts-check
import { defineConfig , fontProviders} from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://spkim1228.github.io',
  integrations: [sitemap()],
  fonts: [{
    provider: fontProviders.google(),
    name: 'Atkinson Hyperlegible Next',
    cssVariable: '--font-atkinson',
    weights: ['200 800'], 
    styles: ['normal'],
    fallbacks: ['system-ui', 'sans-serif'],
  }],
});
