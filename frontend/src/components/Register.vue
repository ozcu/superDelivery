<template>
    <form @submit.prevent="handleSubmit">
        <h3>Sign Up</h3>
        <div class="form-group">
            <label>First Name</label>
            <input type="text" v-model="firstName" placeholder="First Name" />
        </div>

        <div class="form-group">
            <label>Last Name</label>
            <input type="text" v-model="lastName" placeholder="Last Name" />
        </div>

        <div class="form-group">
            <label>Email</label>
            <input type="email" v-model="email" placeholder="Email" />
        </div>
        <div class="form-group">
            <label>Password</label>
            <input type="password" v-model="password" placeholder="Password" />
        </div>
        <div class="form-group">
            <label>Confirm Password</label>
            <input
                type="password"
                v-model="passwordConfirm"
                placeholder="Confirm Password"
            />
        </div>

        <button>Sign Up</button>
    </form>
</template>

<script>
import axios from 'axios'

export default {
    name: 'Register',
    data() {
        return {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            passwordConfirm: '',
        }
    },

    methods: {
        async handleSubmit() {
            const data = {
                firstName: this.firstName,
                lastName: this.lastName,
                email: this.email,
                password: this.password,
                passwordConfirm: this.passwordConfirm,
            }
            await axios.post('users', data)

            this.$router.push('/login')
        },
    },
}
</script>

<style>
.form-group {
    height: auto;
    width: 100px;
    margin: 0 auto;
    display: grid;
    grid-template-rows: repeat(2, 1fr);
    text-align: center;
}
</style>
