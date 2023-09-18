<template>
    <NuxtLink to="/">
        <h2>Nuxt 3</h2>
    </NuxtLink>
    <NuxtLink to="/home">
        <h2>Home</h2>
    </NuxtLink>
    <NuxtLink to="/about">
        <h2>About</h2>
    </NuxtLink>
    <NuxtLink href="/contact" activeClass="hello">
        <h2>Contact</h2>
    </NuxtLink>
</template>

<style scoped>
.myactive {
    color: green;
    text-decoration: none;
}
</style>
