
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "vite-plugin-sitemap";

export default defineConfig({
  server: {
    port: process.env.PORT ? Number(process.env.PORT) : undefined,
  },
  preview: {
    port: process.env.PORT ? Number(process.env.PORT) : undefined,
  },
  plugins: [
    react(),
    tailwindcss(),
    sitemap({
      hostname: "https://TU-DOMINIO-DE-SOFI.vercel.app",
      generateRobotsTxt: false,
    }),
  ],
});

