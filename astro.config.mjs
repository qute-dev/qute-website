import { defineConfig } from 'astro/config';

import compress from "astro-compress";

// https://astro.build/config
export default defineConfig({
  vite: {
    build: {
      cssCodeSplit: false
    }
  },
  integrations: [compress()]
});