<script>
import axios from 'axios'
import { mapState, mapActions } from 'vuex'
export default {
    data() {
        return {
            name: '',
            telephone: '',
            email: '',
            password: '',
            terms: false,
            passwordError: '',
        }
    },
    computed: {
        ...mapState(['showModal']),
    },
    methods: {
        ...mapActions(['toggleModal']),

        handleSubmit() {
            const data = {
                firstName: this.firstName,
                lastName: this.lastName,
                email: this.email,
                password: this.password,
                passwordConfirm: this.passwordConfirm,
            }
            axios.post('users', data)

            this.$router.push('/login')
        },
    },
}
</script>

<template>
    <div class="backdrop" @click.self="toggleModal">
        <div class="modal">
            <div class="container">
                <h1>Register</h1>
                <form @submit.prevent="handleSubmit">
                    <label> Name Surname: </label>
                    <input type="name" required v-model="name" />
                    <label> Telephone: </label>
                    <input
                        type="telephone"
                        required
                        v-model="telephone"
                        placeholder="+90"
                    />
                    <label> Email: </label>
                    <input type="email" required v-model="email" />
                    <label> Password: </label>
                    <input type="password" required v-model="password" />
                    <div v-if="passwordError" class="error">
                        {{ passwordError }}
                    </div>
                    <div class="terms">
                        <input type="checkbox" required v-model="terms" />
                        <label> Accept terms and conditions </label>
                    </div>
                    <div class="submit">
                        <button>Register</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<style>
.modal {
    width: 500px;
    height: 630px;
    padding: 20px;
    margin: 100px auto;
    background: white;
    border-radius: 10px;
}

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
    color: #0b6dff;
    border: none;
    padding: 0;
}
</style>
