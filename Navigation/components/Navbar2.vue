<template>
    <MyLink :to="{ name: 'index' }">
        <h2>Nuxt 3</h2>
    </MyLink>
    <MyLink :to="{ name: 'product' }">
        <h2>Product</h2>
    </MyLink>
    <MyLink :to="{
        name: 'users-group-userid', params: { group: 'Vivek', userid: '24' }
    }">
        <h2>User</h2>
    </MyLink>
    <MyLink :to="{ name: 'animals-name', params: { name: 'Lion' } }">
        <h2>Animals</h2>
    </MyLink>
    <MyLink :to="{
        name: 'course-name', params: { name: 'Python' }
    }">
        <h2>Course</h2>
    </MyLink>
</template>

<style scoped>
.myactive {
    color: green;
    text-decoration: none;
}
</style>
