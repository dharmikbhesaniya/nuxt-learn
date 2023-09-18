import { defineNuxtConfig } from "nuxt3/config";

export default defineNuxtConfig({
  css: [
    "primevue/resources/themes/saga-blue/theme.css",
    "primevue/resources/primevue.min.css",
    "primeicons/primeicons.css",
  ],
  modules: ["@pinia/nuxt"],
  runtimeConfig: {
    KEY :"hello-key-1234"
  },
});
