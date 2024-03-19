import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";

// Define un adapter basado en el entorno para determinar si estamos en Vercel o localmente
const adapter = process.env.VERCEL ? "vercel/serverless" : "astro";
const integrations = [tailwind(), react()];

export default defineConfig({
  integrations,
  output: "dist",
  // Utiliza el adapter correspondiente
  adapter: require(adapter).default()
});
