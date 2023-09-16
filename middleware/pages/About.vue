<script setup>
useHead({
    title: "About"
});

definePageMeta({
    // middleware: "auth",
    middleware: "checkpath",
});
</script>

<template>
    <h2>About</h2>
</template>
