<script>
import { mapState } from 'vuex'
export default {
    name: 'Navbar',

    computed: {
        ...mapState(['userLogged']),
    },

    methods: {
        handleLogout() {
            /*   localStorage.removeItem('token')
            this.$store.state.user = null
            this.$router.push('/').catch(() => {})  */
        },
    },
}
</script>

<template>
    <div id="nav">
        <router-link class="home" to="/">Home</router-link>
        <router-link class="login" v-if="!userLogged" to="/login"
            >Login</router-link
        >
        <router-link class="register" v-if="!userLogged" to="/register"
            >Register</router-link
        >

        <a href="javascript:void(0)" @click="handleLogout" v-if="userLogged">
            Logout
            <!-- buton da olabilir -->
        </a>
    </div>
</template>

<style lang="scss">
body {
    margin: 0;
    background: #eee;
}

#nav {
    background-color: white;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-around;
    padding: 30px;
    gap: 50px;
    padding-left: 100px;
    padding-right: 100px;

    a {
        text-decoration: none;
        font-weight: bold;
        color: #2c3e50;

        &.router-link-exact-active {
            color: #0b6dff;
        }
    }
    .login {
        margin-left: auto;
    }
}
</style>
