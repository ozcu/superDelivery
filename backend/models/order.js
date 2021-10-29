const mongoose = require('mongoose')

const OrderSchema = new mongoose.Schema({
    activeOrderTotal: Number,
    oldOrdersTotal: Number,
    numberofOldOrders: Number,
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        autopopulate: { maxDepth: 1 },
    },
})

const Order = mongoose.model('Order', OrderSchema)
module.exports = Order
