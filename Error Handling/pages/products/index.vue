<template>
  <div>
    <h2>Products</h2>
    <template v-if="data" v-for="val in data">
      <hr />
      <NuxtLink :to="`/products/${val.id}`">
        <img :src="val.image" alt="product" class="img" />
        <h3>Id : {{ val.id }}</h3>
        <h3>Product : {{ val.title }}</h3>
        <h3>Price : {{ val.price }}</h3>
      </NuxtLink>
      <hr />
    </template>
    <h2 v-if="error">Error to fetch data, try again later.</h2>
    <h2 v-if="pending">Loading...</h2>
  </div>
</template>

<script setup>
useHead({
  title: "Products",
});

const { data, pending, error } = await useLazyAsyncData("product", () =>
  $fetch("https://fakestoreapi.com/products")
);
</script>

<style>
.img {
  width: 80px;
}
</style>
