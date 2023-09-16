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
    <NuxtLink href="/contact">
        <h2>Contact</h2>
    </NuxtLink>
    <NuxtLink href="/login">
        <h2>Login</h2>
    </NuxtLink>
</template>

<style scoped>
.router-link-active {
    text-decoration: none;
    color: black;
}
</style>
