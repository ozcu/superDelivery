<script>
import { mapActions } from 'vuex'
export default {
    data() {
        return {
            fields: ['name', 'category', 'price'],
            products: [],
        }
    },
    async mounted() {
        this.products = await this.fetchProducts()

    },

    methods: {
        ...mapActions(['fetchProducts']),
    },
}
</script>

<template>
    <div>
        <h1 style="margin-bottom: 50px">Products</h1>
        <div class="container-lg">
            <div class="row">
                <!-- <div class="col-9">
                    <div>
                        <b-table
                            class="mx-auto border border-secondary"
                            style="width: 800px"
                            striped
                            hover
                            :items="products"
                            :fields="fields"
                        ></b-table>
                    </div>
                </div> -->

                <div class="p-g bg-secondary text-light text-font-5 h2">
                    Product List
                </div>
                <div
                    class="col-2"
                    v-for="product in products"
                    :key="product.id"
                >
                <b-card>{{product.price}} TL</b-card>
                    <b-card
                        :title="product.name"
                        img-src="https://picsum.photos/600/300/?image=25"
                        img-alt="Image"
                        img-top
                        tag="article"
                        style="max-width: 15rem"
                        class="mb-2"
                    >
                        <b-card-text class="text">
                            {{ product.description }}
                        </b-card-text>
                    </b-card>
                </div>
            </div>
        </div>
    </div>
</template>
<style>
.text {
    font-size: 12px;
}
</style>
