<template>
    <form class="form" @submit.prevent="loginUser">
        <h1 class="title">Login</h1>
        <div class="form-group">
            <label>Email</label>
            <input type="email" v-model="email" placeholder="Email" />
        </div>

        <div class="form-group">
            <label>Password</label>
            <input type="password" v-model="password" placeholder="Password" />
        </div>

        <button>Login</button>
    </form>
</template>

<script>
import axios from 'axios'

export default {
    name: 'Login',
    data() {
        return {
            email: '',
            password: '',
        }
    },
    methods: {
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

                if (output.errors) {
                    //bu kısımı catch errora düşmüyor
                    this.emailError = output.errors.email
                    this.passwordError = output.errors.password
                }
                if (output.user) {
                    this.$router.push('/home')
                }
                return
            } catch (err) {
                throw new Error('cannot register the user!')
            }
        },
    },
}
</script>

<style>
.title {
    text-align: center;
    color: #0b6dff;
    border: none;
    padding: 0;
}
</style>
