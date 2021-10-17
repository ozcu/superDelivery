<template>
    <div>
        <h1>Home</h1>
        <h3 v-if="userLogged">Hi , {{ user.firstName }}</h3>
        <h3 v-if="!userLogged">Please log in!</h3>
    </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
    name: 'Home',

    computed: {
        ...mapState(['userLogged']),
    },
}
</script>

<style></style>
