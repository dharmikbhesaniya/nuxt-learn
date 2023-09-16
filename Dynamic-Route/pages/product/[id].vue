<template>
    <h2>Product : {{ $route.params.id }}</h2>
</template>

<script setup>
//* Route validation
definePageMeta({
    //@ now id is only number compulsary, otherwise 404 page shown.
    validate: async (route) => {
        return /^\d+$/.test(route.params.id);
    },
});
</script>
