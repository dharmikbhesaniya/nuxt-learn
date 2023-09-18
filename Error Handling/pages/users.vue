<script setup>
useHead({
  title: "Users",
});

const resolverError = async (error) => {
  await navigateTo("/");
  error.value = null;
};

const myerror = async (error) => {
  console.log("error........");
};
</script>

<template>
  <h2>Users</h2>
  <NuxtErrorBoundary @error="myerror">
    <NuxtPage />
    <template #error="{ error }">
      <h2>Error : {{ error.value.message }} | {{ error.value.statusCode }}</h2>
      <Button @click="resolverError(error)" label="Resolve Error" />
    </template>
  </NuxtErrorBoundary>
</template>
