import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import edgeoneAdapter from "@edgeone/astro";

// https://astro.build/config
export default defineConfig({
  site: 'https://astro-zen.edgeone.app/',
  adapter: edgeoneAdapter(),
  vite: {
    // Cast needed because Astro pins its own Vite types which differ from @tailwindcss/vite's types.
    plugins: /** @type {import("vite").PluginOption[]} */ ([/** @type {any} */ (tailwindcss())]),
  },
});
