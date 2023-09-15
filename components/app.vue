<script setup>

</script>

<template>
  <Header />
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>

  <!--* simple footer we have to compulsary import it -->
  <!-- <Footer /> -->

  <!--* we have to choose name same as its folder herarchi so, we identify file. -->
  <!-- <UserFooter /> -->

  <!--* No need to import when write like this -->
  <!-- <AdminFooter /> -->

  <!--* make components lazy like this -->
  <LazyUserFooter />
</template>
