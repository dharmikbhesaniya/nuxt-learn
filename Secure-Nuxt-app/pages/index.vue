<script setup>
useHead({
  title: "Nuxt 3",
});

const { data } = await useLazyFetch("/api/post/getpost");
</script>

<template>
  <h2>Welcome to Nuxt js 3</h2>
  <template v-for="val in data">
    <hr />
    <h2>Title : {{ val.title }}</h2>
    <h2>Description : {{ val.body }}</h2>
    <hr />
  </template>
  <Button label="PrimeVue" />
</template>
