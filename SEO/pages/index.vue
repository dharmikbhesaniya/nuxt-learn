<script setup>

//* For apply on specific component css or script or title and meta
useHead({
    title: "Nuxt 3",
    meta: [
        { name: "viewport", content: "width=device-width, initial-scale=1" },
    ],
    script: [
        {
            src: "https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js",
            body: true,
        },
    ],
    link: [
        {
            rel: "stylesheet",
            href: "https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css",
        },
    ],
});

//* For make website more SEO friendly.
useSeoMeta({
    title: "Nuxt Js",
    ogTitle: "Nuxt Js",
    description: "This is Nuxt page",
    ogDescription: "This is Nuxt page",
});

//* For make website more SEO friendly from server also.
useServerSeoMeta({
    title: "Nuxt Js",
    ogTitle: "Nuxt Js",
    description: "This is Nuxt page",
    ogDescription: "This is Nuxt page",
});

</script>

<template>
    <h2>Welcome to Nuxt js 3</h2>
    <Button label="PrimeVue" />
</template>
