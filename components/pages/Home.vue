<script setup>

useHead({
    title: "Home"
});

definePageMeta({
    layout: "custom",
});
</script>

<template>
    <h2>Home</h2>
    <!-- <FirstSecondMainFile /> -->

    <!--* lazy load component -->
    <LazyFirstSecondMainFile />
</template>
