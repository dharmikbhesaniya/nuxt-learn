<script setup>
useHead({
    title: "Nuxt 3"
});

// Anonymous Route Middleware
definePageMeta({
    middleware: (context) => {
        // console.log("context", context);
    },
});
</script>

<template>
    <h2>Welcome to Nuxt js 3</h2>
    <Button label="PrimeVue" />
</template>
