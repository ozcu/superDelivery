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
        console.log(this.products)
    },

    methods: {
        ...mapActions(['fetchProducts']),
    },
}
</script>

<template>
    <div>
        <h1 style="margin-bottom: 50px">Products</h1>

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
    </div>
</template>
<style></style>
