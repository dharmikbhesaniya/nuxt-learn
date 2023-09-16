<script setup>
const title = ref("About");
</script>

//* For apply on specific component css or script or title and meta
<template>
    <Head>
        <Title>{{ title }}</Title>
        <Meta name="description" :content="title" />
        <Link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" />
    </Head>
    <h2>About</h2>
</template>
