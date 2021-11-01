<script>
import { mapState } from 'vuex'
import store from '../store'
import VueCookies from 'vue-cookies'
import router from '../router/index'

export default {
    name: 'Navbar',

    computed: {
        ...mapState(['userLogged']),
    },

    methods: {
        handleLogout() {
            VueCookies.remove('token')
            store.state.userLogged = false
            localStorage.setItem('userLogged', false)
            store.state.name = ''
            store.state.email = ''
            router.push('/login')
        },
    },
}
</script>

<template>
    <div id="nav">
        <router-link class="home" to="/">Home</router-link>
        <router-link class="products" v-if="userLogged" to="/products"
            >Products</router-link
        >
        <router-link class="addProduct" v-if="userLogged" to="/add-product"
            >Add Product</router-link
        >
        <router-link class="login" v-if="!userLogged" to="/login"
            >Login</router-link
        >
        <router-link class="register" v-if="!userLogged" to="/register"
            >Register</router-link
        >

        <a href="javascript:void(0)" @click="handleLogout" v-if="userLogged">
            Logout
            <!-- can be changed into button as well-->
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
