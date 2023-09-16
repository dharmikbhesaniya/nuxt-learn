<script setup>
useHead({
    title: "Nuxt 3"
});

const data = useName();
const cartdata = useCart();

</script>

<template>
    <h2>Welcome to Nuxt js 3 - {{ data }}</h2>
    <h2>Cart : {{ cartdata }}</h2>
    <Button label="PrimeVue" />
</template>
