import { defineNuxtConfig } from "nuxt3/config";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: [
    "primevue/resources/themes/saga-blue/theme.css",
    "primevue/resources/primevue.min.css",
    "primeicons/primeicons.css",
  ],
  modules: ["@pinia/nuxt"],

  //* we have to export that composables from index.js file. create index.js into composables folder.

  //@ we have to write this to use inside folder composable file, its not recommended to write here.
  // imports: { dirs: ["composables", "composables/**"] },

  //@ when we have to import specific file from composables
  // imports: {
  //   dirs: [
  //     "composables",
  //     "composables/**",
  //     "composables/*/cart.{ts,js,mjs,mts}",
  //   ],
  // },
});
