---
title: Hello Page
---

# Let's Learn How to Create Nuxt 3 Project

Below are simple Steps to **Create Nuxt3 Project**

- Create Nuxt Project
- Change Directory to Project
- Install Dependencies
- Run Project

#### Commands Required to Perform Above Tasks :

```bash
npx nuxi@latest init nuxtapp
cd nuxtapp
npm i
npm run dev -- -o
```

**Nuxt 3 Config File**

```js
export default defineNuxtConfig({
  modules: ["@pinia/nuxt", "@nuxt/content"],
  content: { highlight: { theme: "dracula" } },
});
```

Visit [About Page](/about)
