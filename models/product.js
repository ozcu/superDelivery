const mongoose = require('mongoose')

const ProductSchema = new mongoose.Schema({
    name:String,
    photo: String,
    description: String,
    price: Number,
    category: String,
    
}, {timestamps: true})

//ProductSchema.plugin(require('mongoose-autopopulate'))
module.exports = mongoose.model('Product',ProductSchema)
