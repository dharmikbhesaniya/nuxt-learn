<template>
    <h2>User Page : {{ params.user }}</h2>
</template>

<script setup>
const { params } = useRoute();
</script>
