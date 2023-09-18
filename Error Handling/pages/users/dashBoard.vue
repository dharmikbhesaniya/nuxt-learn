<script setup>
useHead({
  title: "Dashboard",
});

const error = () => {
  throw createError({
    statusCode: 404,
    statusMessage: "Page Not Found",
    message: "Page not found",
    // fatal: true,
  });
};
</script>

<template>
  <h2>Dashboard</h2>
  <Button @click="error" label="Throw Error" />
</template>
