<script setup>
useHead({
    title: "Home"
});

definePageMeta({
    //* single custom layout
    layout: "sidebar",

    //* multiple custom layout not allowed
    //^ layout: ["custom", "sidebar"],

    //* remove default layout only and not use any custom layout also
    // layout: false,
});
</script>

<template>
    <h2>Home</h2>
</template>
