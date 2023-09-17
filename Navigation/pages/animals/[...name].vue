<script setup>
definePageMeta({
    middleware: 'auth'
});
</script>

<template>
    <h2>Names : {{ $route.params.name }}</h2>
    <h2>Query : {{ $route.query }}</h2>
</template>
