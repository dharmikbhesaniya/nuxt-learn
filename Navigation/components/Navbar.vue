<template>
    <!--*------------ default nuxtlink -------------->
    <!-- <NuxtLink to="/">
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
    <NuxtLink to="https://google.com" target="ab">
        <h2>Google</h2>
    </NuxtLink> -->

    <!--*------------ custom nuxtlink -------------->
    <MyLink to="/">
        <h2>Nuxt 3</h2>
    </MyLink>
    <MyLink to="/home">
        <h2>Home</h2>
    </MyLink>
    <MyLink to="/about">
        <h2>About</h2>
    </MyLink>
    <MyLink href="/contact">
        <h2>Contact</h2>
    </MyLink>
    <MyLink to="https://google.com" target="ab">
        <h2>Google</h2>
    </MyLink>
    <MyLink to="/product">
        <h2>Product</h2>
    </MyLink>
</template>

<style scoped>
.router-link-active {
    text-decoration: none;
    color: black;
}

.hello {
    color: rgb(245, 4, 108);
    text-decoration: none;
}

.myactive {
    color: green;
    text-decoration: none;
}
</style>
