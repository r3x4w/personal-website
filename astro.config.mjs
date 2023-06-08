import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';
import prefetch from "@astrojs/prefetch";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: 'https://r3x4w.ir',
  integrations: [tailwind({
    config: {
      applyBaseStyles: false
    }
  }), mdx(), prefetch(), sitemap()]
});