<template>
    <h2>Contact Page</h2>
    <h2>Per page layout</h2>
    <h3>Its only work on contact page</h3>
    <hr>

    <!--! use Name slot -->
    <!--* <NuxtLayout name="custom" #socialmedia> -->
    <NuxtLayout name="custom">
        <Input placeholder="PrimeVue Input..." />
        <template #socialmedia>
            <h2>This content goes to Named slot #socialmedia</h2>
        </template>
    </NuxtLayout>
    <hr>
    <NuxtLayout name="custom">
        <h2>This content goes to Default slot without name</h2>
        <Input placeholder="PrimeVue Input..." />
    </NuxtLayout>
</template>

<script setup>
useHead({
    title: "Contact"
});

definePageMeta({
    layout: false,
});
</script>
