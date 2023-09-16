<template>
    <template v-for="{ name, id } in data">
        <MyLink :to="`/product/${id}`">
            <h2>User : {{ name }}</h2>
        </MyLink>
    </template>
</template>

<script setup>
const data = [
    { name: "Abhi", id: 1 },
    { name: "Vivek", id: 2 },
    { name: "Aashish", id: 3 },
    { name: "Dharmik", id: 4 },
];
</script>
