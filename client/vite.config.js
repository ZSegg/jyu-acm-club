import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";

import vue from "@vitejs/plugin-vue";
import vueDevTools from "vite-plugin-vue-devtools";

import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(), vueDevTools(), tailwindcss()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "@/styles/main.scss" as *;`,
      },
    },
  },
  server: {
    // cors: true,
    proxy: {
      "/api": {
        target: `https://jyuacm.icescoffee.com/test`,
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
});
