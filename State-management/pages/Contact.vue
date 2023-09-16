<template>
    <h2>Contact Page : {{ count }}</h2>
    <Button label="Increment" @click="inc" />
</template>

<script setup>

import { storeToRefs } from 'pinia';
import { useCounterStore } from '~/store/counter';

useHead({
    title: "Contact"
});

definePageMeta({
    layout: false,
});

const store = useCounterStore();

const { inc } = store;
const { count } = storeToRefs(store);
</script>
