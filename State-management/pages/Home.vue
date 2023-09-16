<script setup>
useHead({
    title: "Home"
});

definePageMeta({
    layout: "sidebar",
});

const reward = useReward();

</script>

<template>
    <h2>Home : {{ reward }}</h2>
    <Button label="Increment" @click="reward++" />
</template>
