const mongoose = require('mongoose')

const BasketSchema = new mongoose.Schema({
    basketTotal: Number,
    products: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Product',
            autopopulate: true,
        },
    ],

    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        autopopulate: true,
    },
})
BasketSchema.plugin(require('mongoose-autopopulate'))
module.exports = mongoose.model('Basket', BasketSchema)
