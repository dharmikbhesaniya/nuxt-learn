<template>
    <!--* you have to write nuxtpage to apply middleware to child component of admin also -->
    <NuxtPage />
</template>

<script setup>
definePageMeta({
    middleware: 'admin-auth'
});
</script>
