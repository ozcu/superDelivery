<template>
    <div>
        <h1>Home</h1>
        <h3 v-if="user">Hi , {{ user.firstName }}</h3>
        <h3 v-if="!user">Please log in!</h3>
    </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
    name: 'Home',

    computed: {
        ...mapState(['user']),
    },
}
</script>

<style></style>
