const mongoose = require('mongoose')

const BasketSchema = new mongoose.Schema({
    basketTotal: Number,
    products: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Product',
        },
    ],

    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        autopopulate: { maxDepth: 1 },
    },
})
//BasketSchema.plugin(require('mongoose-autopopulate'))
module.exports = mongoose.model('Basket', BasketSchema)
