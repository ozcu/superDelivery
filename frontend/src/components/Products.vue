<script>
import { mapActions } from 'vuex'
import Basket from './Basket.vue'
import axios from 'axios'
export default {
    name: 'Products',
    components: { Basket },
    data() {
        return {
            query: '',
            products: [],
            matchedProducts: [],
            isSearched: false,
        }
    },
    async mounted() {
        this.products = await this.fetchProducts()
    },

    methods: {
        ...mapActions(['fetchProducts']),
        findProducts() {
            return this.products.filter((product) => {
                const regex = new RegExp(this.query, 'gi')
                return product.name.match(regex) //|| product.category.match(regex) bu calısmadı sonra bak
            })
        },
        displayProducts() {
            const products = this.findProducts()
            this.matchedProducts = products
            this.isSearched = true
            return this.matchedProducts
        },
        addProductToBasket(passedProductId) {
            const productId = passedProductId
            const basketId = '617da5c17e8d54387b403f7f' // create a new basket when user created, nest the new basket to relevant user schema, fetch it on mount and store it here.
            axios
                .post(`/baskets/${basketId}/add/${productId}`)
                .then(function () {
                    console.log('SUCCESS!!')
                })
                .catch(function () {
                    console.log('FAILURE!!')
                })
        },
        removeProductFromBasket(passedProductId) {
            const productId = passedProductId
            const basketId = '617da5c17e8d54387b403f7f'
            axios
                .post(`/baskets/${basketId}/remove/${productId}`)
                .then(function () {
                    console.log('SUCCESS!!')
                })
                .catch(function () {
                    console.log('FAILURE!!')
                })
        },
    },
}
</script>

<template>
    <div>
        <div>
            <h1>Products</h1>

            <div class="basket"><Basket /></div>
        </div>

        <div class="searchbar">
            <b-form-input
                v-model="query"
                @keyup="displayProducts"
                placeholder="Search Product"
            ></b-form-input>
        </div>
        <div class="container-lg">
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
                            @click="addProductToBasket(product._id)"
                        >
                            +
                        </button>
                        <button
                            class="bg-secondary text-light p-1"
                            @click="removeProductFromBasket(product._id)"
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
                            @click="removeProductFromBasket(matchedProduct._id)"
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
</style>
