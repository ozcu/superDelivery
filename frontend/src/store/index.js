import Vue from 'vue'
import Vuex from 'vuex'

//import axios from 'axios'
//import VueCookies from 'vue-cookies'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {},
    state: {
        userLogged: false,
        email: '',
        emailError: '',
        password: '',
        passwordError: '',
    },
    mutations: {},
    actions: {
        async loginUser() {
            /* const data = {
                email: this.email,
                password: this.password,
            }

            try {
                const res = await axios.post(
                    'http://localhost:3000/login',
                    data,
                )

                const output = await res.data
                // const token = await res.body

                if (output.token) {
                    console.log(output.token)
                    VueCookies.set('token', output.token, '1h')
                }

                if (output.errors) {
                    this.emailError = output.errors.email
                    this.passwordError = output.errors.password
                } else {
                    alert('Login completed!')
                    this.$router.push('/products')
                }
                return
            } catch (err) {
                throw new Error('cannot login the user!')
            } */
        },
    },
})
