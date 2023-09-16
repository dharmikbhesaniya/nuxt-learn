<script setup>
useHead({
    title: "About"
});

const reward = useReward();

</script>

<template>
    <h2>About : {{ reward }}</h2>
    <Button label="Decrement" @click="reward--" />
</template>
