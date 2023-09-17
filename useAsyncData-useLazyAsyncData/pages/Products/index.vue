<template>
  <div>
    <h2>Products</h2>
    <Button label="Refresh" @click="refreshproducts" />
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

//* Its not recommended to use, its blocking
// const { data, pending, error, refresh } = await useAsyncData(
//   "product",
//   () =>
//     $fetch("https://fakestoreapi.com/products")
// );

const { data, pending, error, refresh } = await useLazyAsyncData(
  "product",
  () =>
    //& if we have to write some logic before api call than use "useLazyAsyncData"
    $fetch("https://fakestoreapi.com/products"),
  { immediate: true }
);

const refreshproducts = () => {
  //* Refresh is same for all methods
  //& useFetch
  //& useLazyFetch
  //& useAsyncData
  //& useLazyAsyncData

  // refreshNuxtData();
  // refresh();
  clearNuxtData();
};
</script>

<style>
.img {
  width: 80px;
}
</style>
