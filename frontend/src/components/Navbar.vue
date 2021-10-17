<template>
    <div id="nav">
        <router-link class="home" to="/">Home</router-link>
        <router-link class="login" v-show="!user" to="/login"
            >Login</router-link
        >
        <router-link
            class="register"
            @click="toggleModal"
            v-show="!user"
            to="/register"
            >Sign Up</router-link
        >
        <router-link class="logout" @click="logoutHandle" v-show="user">
            Logout
        </router-link>
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
    name: 'Navbar',

    computed: {
        ...mapState(['user']),
        ...mapState(['showModal']),
    },
    methods: {
        logoutHandle() {
            localStorage.removeItem('token')
            this.$store.state.user = null
            this.$router.push('/').catch(() => {})
        },
        ...mapActions(['toggleModal']),
    },
}
</script>

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
