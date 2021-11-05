import axios from 'axios'
import Vue from 'vue'
import Vuex from 'vuex'
import router from '../router/index'
import VueCookies from 'vue-cookies'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {},
    state: {
        userLogged: false,
        name: '',
        email: '',
        emailError: '',
        password: '',
        passwordError: '',
        basketTotal: 0,
        userId: '',
        basketId: '',
    },
    mutations: {
        //checks if server generated a valid JWT and sets it to a cookie
        CHECK_AUTH_LOGIN(state, output) {
            if (output.token) {
                VueCookies.set('token', output.token, process.env.MAXAGE)
                localStorage.setItem('userLogged', true)
                this.state.userLogged = true
                this.state.name = output.name // hard refresh removes its persistence maybe use persistent vuex
                this.state.email = ''
                this.state.password = ''
                this.state.userId = output.id
            }
            //checks if any error is available, sets it to show in Login screen.
            if (output.errors) {
                this.state.emailError = output.errors.email
                this.state.passwordError = output.errors.password
            } else {
                console.log('login completed')
                router.push('/products')
            }
        },
        //Register user in signup component
        REGISTER_USER(state, output) {
            if (output.errors) {
                this.state.emailError = output.errors.email
                this.state.passwordError = output.errors.password
            } else {
                alert('Registration completed, please login')
                router.push('/login')
            }
        },
    },
    actions: {
        async checkAuthLogin({ commit }) {
            const data = {
                email: this.state.email,
                password: this.state.password,
            }
            try {
                const res = await axios.post('/login', data)
                const output = await res.data
                commit('CHECK_AUTH_LOGIN', output)
            } catch (err) {
                throw new Error(`cannot login the user!, Error : ${err}`)
            }
        },
        async registerUser({ commit }) {
            const data = {
                name: this.state.name,
                email: this.state.email,
                password: this.state.password,
            }
            try {
                const res = await axios.post('/register', data)
                const output = await res.data
                commit('REGISTER_USER', output)
            } catch (err) {
                throw new Error(`cannot register the user!, Error : ${err}`)
            }
        },
        async fetchProducts() {
            try {
                const res = await axios.get('/products')
                return res.data.products
            } catch (err) {
                throw new Error(`Error : ${err}`)
            }
        },
        async fetchBasket() {
            try {
                const res = await axios.get('/baskets')

                const user = res.data.filter((el) => {
                    return el.user
                })
                const matchedBasket = user.map((el) => {
                    if (el.user._id == this.state.userId) {
                        const basketId = el._id
                        const basketTotal = el.basketTotal
                        const products = el.products
                        return { basketId, basketTotal,products }
                    } else {
                        console.log('basket and user not matched')
                    }
                })
                return matchedBasket
            } catch (err) {
                throw new Error(`Error : ${err}`)
            }
        },

        async forgotPassword() {
            const email = this.state.email

            try {
                const res = await axios.post('/forgot-password', { email })
                return res
            } catch (err) {
                throw new Error(`Error is ${err}`)
            }
        },
    },
})
