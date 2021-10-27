<script>
import { mapState , mapActions} from 'vuex'

export default {
    name: 'Login',

    computed: {
        ...mapState(['email', 'emailError', 'password', 'passwordError']),
    },

    methods: {
        ...mapActions(['checkAuthLogin']),
    },
}
</script>

<template>
    <form class="form" @submit.prevent="checkAuthLogin">
        <h1 class="title">Login</h1>
        <div class="form-group">
            <label>Email</label>
            <input
                type="email"
                v-model="$store.state.email"
                placeholder="Email"
            />
        </div>
        <div v-if="$store.state.emailError" class="error">
            {{ $store.state.emailError }}
        </div>

        <div class="form-group">
            <label>Password</label>
            <input
                type="password"
                v-model="$store.state.password"
                placeholder="Password"
            />
        </div>
        <div v-if="$store.state.passwordError" class="error">
            {{ $store.state.passwordError }}
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
