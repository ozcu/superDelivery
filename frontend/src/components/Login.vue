<template>
    <form class="form" @submit.prevent="handleSubmit">
        <h3>Login</h3>
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
    computed: {},
    methods: {
        async handleSubmit() {
            const data = {
                email: this.email,
                password: this.password,
            }

            const response = await axios.post('/auth/login', data)
            window.localStorage.setItem('token', response.data.access_token)
            console.log(response.data.access_token)
            console.log(response.data.user)

            this.$store.state.user = response.data.user

            this.$router.push('/')
        },
    },
}
</script>

<style>
.form {
    height: auto;
    width: 100px;
    margin: 0 auto;
    display: grid;
    grid-template-rows: repeat(2, 1fr);

    justify-content: center;
}
</style>
