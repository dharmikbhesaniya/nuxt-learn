<script setup>
useHead({
    title: "Nuxt 3"
});
</script>

<template>
    <!--* this component render on client side only -->
    <ClientOnly>
        <template #fallback>
            <h2>Loading...</h2>
        </template>
        <LazyClientCompLogo />
    </ClientOnly>

    <!--* another way to make component client only -->
    <!-- <ClientCompLogo /> -->

    <!--* server component -->
    <ServerCompLogo />
    <h2>Welcome to Nuxt js 3</h2>
    <Button label="PrimeVue" />
</template>
