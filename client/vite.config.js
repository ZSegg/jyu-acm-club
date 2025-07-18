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
  // css: {
  //   preprocessorOptions: {
  //     scss: {
  //       additionalData: `
  //       @use "@/styles/variables.scss" as *;
  //       @use "@/styles/components/_button.scss" as *;
  //       `, // 全局注入
  //     },
  //   },

  // },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "@/styles/main.scss" as *;`,
      },
    },
  }
});
