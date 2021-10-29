const mongoose = require('mongoose')

const ProductSchema = new mongoose.Schema({
    name: String,
    description: String,
    photo: String,
    price: Number,
    category: String,
})

const Product = mongoose.model('Product', ProductSchema)
module.exports = Product
