<script setup>
useHead({
    title: "Nuxt 3"
});

//* useState is use when we have to change value from one component and get reflect that changes in all component where we are used that varibale of useState. 

//& we are get value of useState like ref, we have to use 'count.value' to get value of count.
//& but in template tag its automatically unwrapped so, no need to write count.value. 

const count = useState('counter', () => 18);

</script>

<template>
    <h2>Welcome to Nuxt js 3</h2>
    <h2>Count : {{ count }}</h2>
    <Button label="Increment" @click="count++" />
</template>
