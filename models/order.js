const mongoose = require('mongoose')

const OrderSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, minlength: 2 },
    oldOrders: [],
    activeOrder: [],
    orderTotal: Number,
  },
  { timestamps: true },
)
//OrderSchema.plugin(require('mongoose-autopopulate'))
module.exports = mongoose.model('Order', OrderSchema)
