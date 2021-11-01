<script>
import { mapState, mapActions } from 'vuex'

export default {
    name: 'Register',
    computed: {
        ...mapState([
            'name',
            'email',
            'password',
            'emailError',
            'passwordError',
            'terms',
        ]),
    },

    methods: {
        routeHome() {
            this.$router.push('/')
        },
        ...mapActions(['registerUser']),
    },
}
//modal missing on backdrop adding it not render it removing it not trigger click.self
</script>

<template>
    <div class="backdrop" @click.self="routeHome()">
        <div class="container">
            <h1>Register</h1>
            <form class="registerForm" @submit.prevent="registerUser">
                <label> Name: </label>
                <input type="name" required v-model="$store.state.name" />

                <label> Email: </label>
                <input type="email" required v-model="$store.state.email" />
                <div v-if="emailError" class="error">
                    {{ $store.state.emailError }}
                </div>
                <label> Password: </label>
                <input
                    type="password"
                    required
                    minlength="6"
                    v-model="$store.state.password"
                />
                <div v-if="passwordError" class="error">
                    {{ $store.state.passwordError }}
                </div>
                <div class="terms">
                    <input
                        type="checkbox"
                        required
                        v-model="$store.state.terms"
                    />
                    <label> Accept terms and conditions </label>
                </div>
                <div class="submit">
                    <button>Register</button>
                </div>
            </form>
        </div>
    </div>
</template>

<style>
.backdrop {
    top: 0;
    position: fixed;
    background: rgba(0, 0, 0, 0.5);
    width: 100vw;
    height: 100vh;
}
form {
    max-width: 420px;
    margin: 30px auto;
    background: white;
    text-align: left;
    padding: 40px;
    border-radius: 10px;
}
label {
    color: #aaa;
    display: inline-block;
    margin: 25px 0 15px;
    font-size: 0.6em;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-weight: bold;
}
input {
    display: block;
    padding: 10px 6px;
    width: 100%;
    box-sizing: border-box;
    border: none;
    border-bottom: 1px solid #ddd;
    color: #555;
}

input[type='checkbox'] {
    display: inline-block;
    width: 16px;
    margin: 0 10px 0 0;
    position: relative;
    top: 2px;
}
button {
    background: #0b6dff;
    border: 0;
    padding: 10px 20px;
    margin-top: 20px;
    color: white;
    border-radius: 20px;
}
.submit {
    text-align: center;
}

.error {
    color: #ff0062;
    margin-top: 10px;
    font-size: 0.8em;
    font-weight: bold;
}

.container h1 {
    color: #1757b8;
    border: none;
    padding: 0;
    margin-top: 50px;
}
</style>
