<template>
    <div>
        <b-button class="button" variant="primary"
            >Cart: {{ basketTotal }} TL</b-button
        >
        <div id="shoppingCart" class="modal fade">
            <!-- The rest of the modal will go here -->
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    name: 'Basket',

    data() {
        return {
            basketTotal: 0, // make it a computed property
        }
    },
    async mounted() {
        this.basket = await this.fetchBaskets()
        //fetch global state user id fetch user and find nested basket bring it
    },
    methods: {
        async fetchBaskets() {
            const res = await axios.get('/baskets')
            this.basketTotal = Math.round(res.data[0].basketTotal)
            console.log(res.data[0].basketTotal)
            return res.data
        },
    },
}
</script>

<style>
.button {
    width: 125px;
}
</style>
