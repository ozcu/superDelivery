import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components//Home.vue'
import Login from '../components//Login.vue'
import SignupForm from '../components/SignupForm.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/login',
        name: 'Login',
        component: Login,
    },
    {
        path: '/register',
        name: 'Register',
        component: SignupForm,
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
})

export default router
