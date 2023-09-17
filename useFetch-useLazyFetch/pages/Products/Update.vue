<template>
  <div>
    <h2>Update Product</h2>
    <template v-if="product">
      <img :src="product.image" alt="product" class="img" />
      <h3>Id : {{ product.id }}</h3>
      <h3>Product : {{ product.title }}</h3>
      <h3>Price : {{ product.price }}</h3>
    </template>
    <Button label="Edit Product" @click="myfunc" />
  </div>
</template>

<script setup>
let product = ref();

const formdata = {
  title: "Lenovo Ideapad 3",
  price: 24000,
  description: "Great Product",
  image: "https://i.pravatar.cc",
  category: "laptop",
};

const myfunc = async () => {
  const { data } = await useLazyFetch(`https://fakestoreapi.com/products/1`, {
    method: "PUT",
    body: formdata,
  });
  product.value = data.value;
};
</script>
