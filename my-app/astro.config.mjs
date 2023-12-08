import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import svelte from "@astrojs/svelte";
import vue from "@astrojs/vue";

import qwikdev from "@qwikdev/astro";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), react(), svelte(), vue(), qwikdev()]
});