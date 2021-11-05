<script>
import axios from 'axios'
import { mapState, mapActions } from 'vuex'

export default {
    name: 'Basket',

    data() {
        return {
            fields: ['name', 'price'],
            basket: {},
            products:[],
        }
    },
    async mounted() {
        const basket = await this.fetchBasket()
        this.basket = basket[0]
        this.products = this.basket.products
    },
    computed: {
        ...mapState(['basketTotal', 'basketId']),
    },

    methods: {
        ...mapActions(['fetchBasket']),
        async emptyBasket() {
            const basketId = this.$store.state.basketId
            axios.post(`/baskets/emptyBasket/${basketId}`)
            const fetchedBasket = await this.fetchBasket()
            this.$store.state.basketTotal = fetchedBasket[0].basketTotal
        },
    },
}
</script>

<template>
    <div>
        <div>
            <b-button v-b-modal.modal-1
                ><b-button class="button" variant="primary">
                    <b-icon scale="1.2" icon="cart2"> </b-icon>
                    {{ $store.state.basketTotal }} TL</b-button
                >
                <div>
                    <b-button class="button" @click.self="emptyBasket()"
                        ><b-icon scale="1.5" icon="trash"> </b-icon
                    ></b-button></div
            ></b-button>

            <b-modal id="modal-1" title="Basket">
                <div>
                    <b-table
                        class="mx-auto border border-secondary"
                        style="width: 400px"
                        striped
                        hover
                        :items="products"
                        :fields="fields"
                    ></b-table>
                </div>
            </b-modal>
        </div>
    </div>
</template>

<style></style>
