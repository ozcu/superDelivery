<template>
    <div id="nav">
        <router-link class="home" to="/">Home</router-link>
        <router-link class="login" v-show="!user" to="/login"
            >Login</router-link
        >
        <router-link class="register" v-show="!user" to="/register"
            >Sign Up</router-link
        >
        <router-link
            class="logout"
            href="javascript:void(0)"
            @click="logoutHandle"
            v-show="user"
        >
            Logout
        </router-link>
    </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
    name: 'Navbar',

    computed: {
        ...mapState(['user']),
    },
    methods: {
        logoutHandle() {
            localStorage.removeItem('token')
            this.$store.state.user = null
            this.$router.push('/').catch(() => {})
        },
    },
}
</script>

<style>
#nav {
    padding: 10px;
    font-size: 20px;
    color: white;
    display: grid;
    margin: 0 auto;
    grid-template-columns: repeat(3, 1fr);
    text-decoration: none;
    background-color: #51739b;
}

.login {
    color: white;
    text-decoration: none;
}
.logout {
    color: white;
    text-decoration: none;
}
.register {
    color: white;
    text-decoration: none;
}
.home {
    color: white;
    text-decoration: none;
}
</style>
