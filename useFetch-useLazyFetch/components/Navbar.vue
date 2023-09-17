<template>
  <NuxtLink to="/">
    <h2>Nuxt 3</h2>
  </NuxtLink>
  <NuxtLink to="/about">
    <h2>About</h2>
  </NuxtLink>
  <NuxtLink to="/products">
    <h2>Products</h2>
  </NuxtLink>
  <NuxtLink to="/products/create">
    <h2>Add Product</h2>
  </NuxtLink>
  <NuxtLink to="/products/update">
    <h2>Update Product</h2>
  </NuxtLink>
</template>

<style scoped>
.myactive {
  color: green;
  text-decoration: none;
}
</style>
