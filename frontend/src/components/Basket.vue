<template>
    <div>
        <b-button class="button" variant="primary"
            >Cart: {{ $store.state.basketTotal }} TL</b-button
        >
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
    name: 'Basket',

    computed: {
        ...mapState(['basketTotal']),
    },

    methods: {
        ...mapActions(['fetchBasket']),
    },
}
</script>

<style></style>
