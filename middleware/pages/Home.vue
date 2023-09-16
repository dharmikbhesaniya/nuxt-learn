<script setup>
useHead({
    title: "Home"
});

definePageMeta({
    layout: "sidebar",
    middleware: "checkpath",
});
</script>

<template>
    <h2>Home</h2>
</template>
