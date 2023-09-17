<script setup>
import Comp from '../src/components/Comp.vue';
useHead({
    title: "Nuxt 3"
});
</script>

<template>
    <h2 class="blue">Welcome to Nuxt js 3</h2>
    <h2 class="green">Welcome to Nuxt js 3</h2>

    <!--* red class not applied here. because its not in a global css. its local css of about page -->
    <h2 class="red">Welcome to Nuxt js 3</h2>

    <!--* applied tailwind css -->
    <h2 class="text-3xl font-bold text-blue-500">Welcome to Nuxt js 3</h2>

    <Input placeholder="Hello PrimeVue" />
    <Button label="PrimeVue" />

    <Comp />
</template>
