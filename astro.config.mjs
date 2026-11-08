import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://airbornesoldier.com",
  base: "/",
  trailingSlash: "always",
  vite: {
    plugins: [tailwindcss()],
  },
});
