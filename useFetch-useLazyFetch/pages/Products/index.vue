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

//* useFetch

//@ this is not recommended, because it is blocking
// const { data, pending, error, refresh } = await useFetch(
//   "https://fakestoreapi.com/products"
// );

//@ always use lazy fetch
const { data, pending, error, refresh } = await useLazyFetch(
  "https://fakestoreapi.com/products"
);

const refreshproducts = () => {
  //& Its use to refresh all data of current page
  // refresh();
  // refreshNuxtData();

  //& Its use to clear cache of data of current page
  clearNuxtData();
};
</script>

<style>
.img {
  width: 80px;
}
</style>
