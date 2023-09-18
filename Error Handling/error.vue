<template>
  <h2>Error To Fetch Data, Please try again later...</h2>
  <h2>{{ error.message }}</h2>

  <!-- clearError redirect us to "/" route -->
  <Button @click="clearError({ redirect: '/' })" label="Back To Home" />
</template>

<script setup>
//* both has same work
// defineProps(["error"]);
const error = useError();
</script>
