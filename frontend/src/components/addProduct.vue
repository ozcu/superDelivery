<script>
import axios from 'axios'
export default {
    data() {
        return {
            file: '',
            name: '',
            description: '',
            price: Number,
            category: '',
        }
    },

    methods: {
        submitFile() {
            const productData = {
                name: this.name,
                description: this.description,
                price: this.price,
                category: this.category,
            }
            let formData = new FormData()
            formData.append('file', this.file)
            formData.append('productData', JSON.stringify(productData))
            console.log(this.file)
            axios
                .post('/upload-file', formData)
                .then(function () {
                    console.log('SUCCESS!!')
                })
                .catch(function () {
                    console.log('FAILURE!!')
                })
            this.$router.go(0)
        },
        handleFileUpload() {
            this.file = this.$refs.file.files[0] //requires ref="file" in input
        },
    },
}
</script>

<template>
    <div class="container">
        <div>
            <form class="form">
                <h1 class="title">Add Product</h1>
                <div class="form-group">
                    <label>Name</label>
                    <input
                        type="text"
                        v-model="name"
                        placeholder="Product Name"
                    />
                </div>

                <div class="form-group">
                    <label>Description</label>
                    <input
                        type="text"
                        v-model="description"
                        placeholder="Product Description"
                    />
                </div>

                <div class="form-group">
                    <label>Price</label>
                    <input
                        type="number"
                        v-model="price"
                        placeholder="Product Price"
                    />
                </div>
                <div class="form-group">
                    <label>Category</label>
                    <input
                        type="text"
                        v-model="category"
                        placeholder="Product Category"
                    />
                </div>
                <div>
                    <label>Add Product Photo</label>
                    <input
                        required
                        type="file"
                        ref="file"
                        accept="image/jpeg, image/png"
                        @change="handleFileUpload"
                    />
                </div>
            </form>
            <button @click="submitFile">Submit</button>
        </div>
    </div>
</template>

<style></style>
