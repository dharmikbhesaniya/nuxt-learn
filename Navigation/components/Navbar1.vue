<template>
    <!--* without variables - static -->
    <!-- <MyLink to="/">
        <h2>Nuxt 3</h2>
    </MyLink>
    <MyLink to="/product">
        <h2>Product</h2>
    </MyLink>
    <MyLink to="/users-abhi/18">
        <h2>User</h2>
    </MyLink>
    <MyLink to="/animals/lion/tiger/cat/dog">
        <h2>Animals</h2>
    </MyLink>
    <MyLink to="/course/Javascript">
        <h2>Course</h2>
    </MyLink> -->

    <!--* with variables - dynamic -->
    <MyLink to="/">
        <h2>Nuxt 3</h2>
    </MyLink>
    <MyLink to="/product">
        <h2>Product</h2>
    </MyLink>
    <MyLink :to="`/users-${user}/${uid}`">
        <h2>User</h2>
    </MyLink>
    <MyLink :to="`/animals/${animals}/${animals2}`">
        <h2>Animals</h2>
    </MyLink>
    <MyLink :to="`/course/${course}`">
        <h2>Course</h2>
    </MyLink>
</template>

<script setup>
const user = ref("Abhi");
const uid = ref(18);
const animals = ref("Lion");
const animals2 = ref("Tiger");
const course = ref("Javascript");
</script>

<style scoped>
.myactive {
    color: green;
    text-decoration: none;
}
</style>
