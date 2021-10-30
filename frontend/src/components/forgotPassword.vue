<template>
    <form class="form" @submit.prevent="forgotPassword">
        <h1 class="title">Forgot Password</h1>
        <div class="form">
            <label>Email</label>
            <input
                type="email"
                v-model="$store.state.email"
                placeholder="Email"
            />
        </div>

        <button>Send</button>
    </form>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
    name: 'forgotPassword',
    computed: {
        ...mapState(['email']),
    },
    methods: {
        ...mapActions(['forgotPassword']),
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
