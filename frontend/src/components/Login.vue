<script>
import axios from 'axios'
import VueCookies from 'vue-cookies'
//import { mapAction,mapState } from 'vuex'

export default {
    name: 'Login',

    data() {
        return {
            email: '',
            emailError: '',
            password: '',
            passwordError: '',
        }
    },
    /* computed:{
            ...mapState(['email','emailError','password','passwordError'])
        },  */

    methods: {
        //...mapAction(['loginUser'])
        async loginUser() {
            const data = {
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
            }
        },
    },
}
</script>

<template>
    <form class="form" @submit.prevent="loginUser">
        <h1 class="title">Login</h1>
        <div class="form-group">
            <label>Email</label>
            <input type="email" v-model="email" placeholder="Email" />
        </div>
        <div v-if="emailError" class="error">
            {{ emailError }}
        </div>

        <div class="form-group">
            <label>Password</label>
            <input type="password" v-model="password" placeholder="Password" />
        </div>
        <div v-if="passwordError" class="error">
            {{ passwordError }}
        </div>

        <button>Login</button>
    </form>
</template>

<style>
.title {
    text-align: center;
    color: #0b6dff;
    border: none;
    padding: 0;
}

.error {
    color: #ff0062;
    margin-top: 10px;
    font-size: 0.8em;
    font-weight: bold;
}
</style>
