import { defineConfig } from "astro/config";
import staticSite from "@astrojs/static"; // Adaptador correcto para sitios estáticos

export default defineConfig({
  output: "static",
  adapter: staticSite(),
  base: "/minimalist-portfolio-json/", // Repositorio en GitHub
});