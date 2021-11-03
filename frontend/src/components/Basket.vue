<template>
    <div>
        <b-button class="button" variant="primary"
            >Cart: {{ $store.state.basketTotal }} TL</b-button
        >
        <div id="shoppingCart" class="modal fade">
            <!-- The rest of the modal will go here -->
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'
import axios from 'axios'
export default {
    name: 'Basket',
    computed: { ...mapState(['basketTotal']) },
    data() {
        return {}
    },
    async mounted() {
        this.basket = await this.fetchBaskets()
        //fetch global state user id fetch user and find nested basket bring it
    },
    methods: {
        async fetchBaskets() {
            const res = await axios.get('/baskets')
            this.$store.state.basketTotal = Math.round(res.data[0].basketTotal)

            return res.data
        },
    },
}
</script>

<style></style>
