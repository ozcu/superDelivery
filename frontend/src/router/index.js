import Vue from 'vue'
import VueRouter from 'vue-router'

import VueCookies from 'vue-cookies'
import axios from 'axios'
import store from '../store'

import Home from '../components/Home.vue'
import Login from '../components/Login.vue'
import SignupForm from '../components/SignupForm.vue'
import Products from '../components/Products.vue'
import forgotPassword from '../components/forgotPassword.vue'
import addProduct from '../components/addProduct.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
        meta: { requiresAuth: false },
    },
    {
        path: '/login',
        name: 'Login',
        component: Login,
        meta: { requiresAuth: false },
    },
    {
        path: '/register',
        name: 'Register',
        component: SignupForm,
        meta: { requiresAuth: false },
    },
    {
        path: '/forgot-password',
        name: 'Forgot Password',
        component: forgotPassword,
        meta: { requiresAuth: false },
    },
    {
        path: '/products',
        name: 'Products',
        component: Products,
        meta: { requiresAuth: true },
    },
    {
        path: '/add-product',
        name: 'addProduct',
        component: addProduct,
        meta: { requiresAuth: true },
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
})

router.beforeEach(async (to, from, next) => {
    console.log(`navigating to ${to.name} from ${from.name}`)

    console.log(to.meta)

    //protected route axios call check token validity and set userLogged state
    if (to.meta.requiresAuth == true) {
        try {
            if (localStorage.getItem('userLogged')) {
                store.state.userLogged = true
            } else {
                store.state.userLogged = false
            }
            const token = VueCookies.get('token')
            axios.defaults.headers.common['Authorization'] = `Bearer ${token}`

            const res = await axios.get('/auth')
            const { error } = await res.data
            if (error != null || error != undefined) {
                alert(error)
                localStorage.setItem('userLogged', false)
                store.state.userLogged = false
                next('/login')
            } else {
                next()
            }
        } catch (err) {
            alert('user is not authenticated')
            next('/login')
        }
    } else {
        next()
    }
})
export default router
