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
        name:'',
        telephone:'',
        terms:false,
        email: '',
        emailError: '',
        password: '',
        passwordError: '',
        bearerToken:''
    },
    mutations: {
        //checks if server generated a valid JWT and sets it to a cookie 
        CHECK_AUTH_LOGIN(state,output) {
            if(output.token){
                VueCookies.set('token',output.token,process.env.MAXAGE)
                this.state.bearerToken = output.token
                this.state.userLogged = true
                this.state.name = output.name
            }
        //checks if any error is available, sets it to show in Login screen.
            if(output.errors){
                this.state.emailError =output.errors.email
                this.state.passwordError = output.errors.password
            }else{
                console.log('login completed')
               router.push('/products')
            }
        },
        //Register user in signup component
        REGISTER_USER(state,output){
            if(output.errors){
                this.state.emailError =output.errors.email
                this.state.passwordError = output.errors.password
            }else{
                alert('Registration completed, please login')
                router.push('/login')
            }
        }
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

                commit('CHECK_AUTH_LOGIN',output)
               
            } catch (err) {
                throw new Error( `cannot login the user!, Error : ${err}`)
            }
        },
        async registerUser({commit}){
            const data = {
                name: this.state.name,
                telephone:this.state.telephone,
                email:this.state.email,
                password:this.state.password
            }
            try{
                const res = await axios.post('/register',data)
                const output = await res.data
                commit('REGISTER_USER',output)
            }catch(err){
                throw new Error( `cannot register the user!, Error : ${err}`)
            }
        }
    },
})
