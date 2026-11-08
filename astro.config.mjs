import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://valskermsoldaat-source.github.io",
  base: "/AirBorneSoldier",
  vite: {
    plugins: [tailwindcss()],
  },
});
