import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig, fontProviders } from "astro/config";
import typesafeRoutes from "astro-typesafe-routes";

export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [typesafeRoutes(), react()],
  fonts: [
    {
      provider: fontProviders.fontsource(),
      cssVariable: "--font-special-gothic-expanded-one",
      name: "Special Gothic Expanded One",
    },
    {
      provider: fontProviders.fontsource(),
      cssVariable: "--font-fira-sans-condensed",
      name: "Fira Sans Condensed",
      weights: [400, 500, 600],
    },
  ],
});
