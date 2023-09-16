<template>
    <h2>Contact Page</h2>
</template>

<script setup>
useHead({
    title: "Contact"
});

definePageMeta({
    layout: false,
    // middleware: "auth",
    middleware: "checkpath",
});
</script>
