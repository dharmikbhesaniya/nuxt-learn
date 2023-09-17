<template>
  <h2>Home Page</h2>
  <h2>{{ formatDate(new Date()) }}</h2>
</template>

<script setup>
console.log(formatDate(new Date()));
</script>
