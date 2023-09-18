import { defineNuxtConfig } from "nuxt3/config";

export default defineNuxtConfig({
  css: [
    "primevue/resources/themes/saga-blue/theme.css",
    "primevue/resources/primevue.min.css",
    "primeicons/primeicons.css",
  ],
  modules: ["@pinia/nuxt"],
  //* For apply global css or script
  app: {
    head: {
      meta: [
        { name: "viewport", content: "width=device-width, initial-scale=1" },
      ],
      script: [
        {
          src: "https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js",
        },
      ],
      link: [
        {
          rel: "stylesheet",
          href: "https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css",
        },
      ],
    },
  },
});
