

<script>
import { mapState } from 'vuex'

export default {
    name: 'Home',

    computed: {
        ...mapState(['userLogged','name']),
    },
}
</script>

<template>
    <div>
        <h1>Home</h1>
         <h3 v-if="userLogged">Hi , {{name}}</h3>
        <h3 v-if="!userLogged">Please log in!</h3> 
    </div>
</template>

<style></style>
