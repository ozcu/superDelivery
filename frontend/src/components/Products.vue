<script>
import { mapActions } from 'vuex'
export default {
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
    },
}
</script>

<template>
    <div>
        <h1>Products</h1>
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
                        img-src="https://picsum.photos/600/300/?image=25"
                        img-alt="Image"
                        img-top
                        tag="article"
                        style="max-width: 15rem"
                        class="mb-2"
                    >
                        <b-card-text class="description">
                            {{ product.description }}
                        </b-card-text>
                        <button class="bg-secondary text-light p-1">+</button>
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
                        img-src="https://picsum.photos/600/300/?image=25"
                        img-alt="Image"
                        img-top
                        tag="article"
                        style="max-width: 15rem"
                        class="mb-2"
                    >
                        <b-card-text class="description">
                            {{ matchedProduct.description }}
                        </b-card-text>
                        <button class="bg-secondary text-light p-1">+</button>
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
</style>
