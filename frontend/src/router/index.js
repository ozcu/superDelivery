import Vue from 'vue'
import VueRouter from 'vue-router'

import VueCookies from 'vue-cookies'

import axios from 'axios'

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
        //if there is JWT exists give access to page.
        //need to decode token on client side to confirm dont know that part yet.
        path: '/products',
        name: 'Products',
        component: Products,
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

    //protected route axios call check token validity
    if (to.meta.requiresAuth == true) {
        try {
            const token = VueCookies.get('token')
            const tokenObj = { token: token }
            const res = await axios.post('/auth/', tokenObj)
            const { error } = await res.data
            if (error !== null && error !== undefined) {
                alert(error)
                next('/login')
            } else {
                next()
            }
        } catch (err) {
            alert('user is not authenticated!')
            next('/login')
        }
    } else {
        next()
    }
})
export default router
