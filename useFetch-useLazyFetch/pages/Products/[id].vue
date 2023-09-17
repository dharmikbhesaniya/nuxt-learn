<script setup>
const route = useRoute();
const { data, pending, error, refresh } = await useLazyFetch(
  `https://fakestoreapi.com/products/${route.params.id}`
);
</script>

<template>
  <div>
    <h2>Single Product</h2>
    <template v-if="data">
      <hr />
      <img :src="data.image" alt="product" class="img" />
      <h3>Id : {{ data.id }}</h3>
      <h3>Product : {{ data.title }}</h3>
      <h3>Price : {{ data.price }}</h3>
      <hr />
    </template>
    <h2 v-if="error">Error to fetch data, try again later.</h2>
    <h2 v-if="pending">Loading...</h2>
  </div>
</template>
