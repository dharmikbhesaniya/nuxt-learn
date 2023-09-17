import { defineNuxtConfig } from "nuxt3/config";

export default defineNuxtConfig({
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  app: {
    head: {
      link: [{ rel: "stylesheet", href: "css/style.css" }],
      script: [{ src: "js/script.js" }, { src: "_nuxt/assets/file.js" }],
    },
  },
  css: [
    "primevue/resources/themes/saga-blue/theme.css",
    "primevue/resources/primevue.min.css",
    "primeicons/primeicons.css",
    "@/assets/css/main.css",
  ],
  modules: ["@pinia/nuxt"],
});
