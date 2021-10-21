import Vue from 'vue'
import VueRouter from 'vue-router'
import VueCookies from 'vue-cookies'

import Home from '../components/Home.vue'
import Login from '../components/Login.vue'
import SignupForm from '../components/SignupForm.vue'
import Products from '../components/Products.vue'

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
    {
        //if there is JWT exists give access to page.
        //need to decode token on client side to confirm dont know that part yet.
        path: '/products',
        name: 'Products',
        component: Products,
        beforeEnter: (to, from, next) => {
            const token = VueCookies.isKey('token')
            if (token == true) {
                next()
            } else {
                next('/register')
                console.log('token is not available')
            }
        },
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
})

export default router
