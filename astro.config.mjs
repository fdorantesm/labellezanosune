import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

const base = process.env.BASE_URL || "/";

// https://astro.build/config
export default defineConfig({
  base,
  integrations: [tailwind()],
});
