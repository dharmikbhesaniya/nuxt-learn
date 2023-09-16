<script setup>

//* Note :- if we have to set order of plugins like which plugin load first and which after.
//* just write number at the starts of plugin file name
//* Now event load first and odd loads second
//&  1.event.js
//&  2.odd.js

useHead({
    title: "Nuxt 3",
});

//@ if we need plugin with provide key in script tag, than import it like this
// const { findevenum, $findoddnum } = useNuxtApp();

const { findevenum } = useNuxtApp();

</script>

<template>
    <h2>Welcome to Nuxt js 3</h2>
    <!--* without provide key, we have to import it -->
    <h2>Even Numbers : {{ findevenum(20).join(", ") }}</h2>

    <!--* with provide key, we don't need to import it. just right $symbol and function name -->
    <h2>Odd Numbers : {{ $findoddnum(20).join(", ") }}</h2>
</template>
