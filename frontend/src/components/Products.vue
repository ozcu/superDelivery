<script>
import axios from 'axios'
import Basket from './Basket.vue'
import { mapActions, mapState } from 'vuex'

export default {
    name: 'Products',
    components: { Basket },

    data() {
        return {
            query: '',
            products: [],
            matchedProducts: [],
            isSearched: false,
            isLoading: true,
        }
    },
    computed: { ...mapState(['basketTotal', 'basketId']) },

    async mounted() {
        this.products = await this.fetchProducts()
        const fetchedBasket = await this.fetchBasket()
        this.$store.state.basketId = fetchedBasket[0].basketId
        this.$store.state.basketTotal = fetchedBasket[0].basketTotal
        this.isLoading = false
    },

    methods: {
        ...mapActions(['fetchProducts', 'fetchBasket']),
        findProducts() {
            return this.products.filter((product) => {
                const regexSearch = new RegExp(this.query, 'gi')

                return (
                    product.name.match(regexSearch) ||
                    product.category.match(regexSearch) ||
                    product.description.match(regexSearch)
                )
            })
        },
        displayProducts() {
            const products = this.findProducts()
            this.matchedProducts = products
            this.isSearched = true
            return this.matchedProducts
        },
        async addProductToBasket(product) {
            const productId = product._id
            const basketId = this.$store.state.basketId

            axios
                .post(`/baskets/${basketId}/add/${productId}`)
                .then(console.log('product added'))
                .catch(function () {
                    console.log('Failed to add product to basket!!')
                })
            const fetchedBasket = await this.fetchBasket()
            this.$store.state.basketTotal = fetchedBasket[0].basketTotal
        },
        async removeProductFromBasket(product) {
            const productId = product._id
            const basketId = this.$store.state.basketId
            axios
                .post(`/baskets/${basketId}/remove/${productId}`)
                .then(console.log('product removed'))
                .catch(function () {
                    console.log('Failed to remove product from basket!!')
                })
            const fetchedBasket = await this.fetchBasket()
            this.$store.state.basketTotal = fetchedBasket[0].basketTotal
        },
    },
}
</script>

<template>
    <div>
        <div>
            <h1>Products</h1>

            <div class="basket">
                <Basket />
            </div>
        </div>

        <div class="searchbar">
            <b-form-input
                v-model="query"
                @keyup="displayProducts()"
                placeholder="Search Product"
            ></b-form-input>
        </div>
        <div v-if="isLoading" class="loader"></div>
        <div v-if="!isLoading" class="container-lg">
            <div v-if="!isSearched" class="row">
                <div
                    class="col-2"
                    v-for="product in products"
                    :key="product.id"
                >
                    <b-card>{{ product.price }} TL</b-card>
                    <b-card
                        :title="product.name"
                        :img-src="product.photo"
                        img-alt="Image"
                        img-top
                        tag="article"
                        style="max-width: 15rem"
                        class="mb-2"
                    >
                        <b-card-text class="description">
                            {{ product.description }}
                        </b-card-text>
                        <button
                            class="bg-secondary text-light p-1"
                            @click="addProductToBasket(product)"
                        >
                            +
                        </button>
                        <button
                            class="bg-secondary text-light p-1"
                            @click="removeProductFromBasket(product)"
                        >
                            -
                        </button>
                    </b-card>
                </div>
            </div>
            <div v-else class="row">
                <div
                    class="col-2"
                    v-for="matchedProduct in matchedProducts"
                    :key="matchedProduct.id"
                >
                    <b-card>{{ matchedProduct.price }} TL</b-card>
                    <b-card
                        :title="matchedProduct.name"
                        :img-src="matchedProduct.photo"
                        img-alt="Image"
                        img-top
                        tag="article"
                        style="max-width: 15rem"
                        class="mb-2"
                    >
                        <b-card-text class="description">
                            {{ matchedProduct.description }}
                        </b-card-text>
                        <button
                            class="bg-secondary text-light p-1"
                            @click="addProductToBasket(matchedProduct)"
                        >
                            +
                        </button>
                        <button
                            class="bg-secondary text-light p-1"
                            @click="removeProductFromBasket(matchedProduct)"
                        >
                            -
                        </button>
                    </b-card>
                </div>
            </div>
        </div>
    </div>
</template>
<style>
.description {
    font-size: 12px;
}
.searchbar {
    margin-bottom: 10px;
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 500px;
}
.basket {
    width: 100px;
    margin-left: auto;
    margin-right: 150px;
}

.button {
    width: 180px;
}

.loader {
    margin-top: 250px;
    margin-left: auto;
    margin-right: auto;
    border: 16px solid #f3f3f3;
    border-top: 16px solid #3498db;
    border-radius: 50%;
    width: 120px;
    height: 120px;
    animation: spin 1s linear infinite;
}

@keyframes spin {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
}
</style>
