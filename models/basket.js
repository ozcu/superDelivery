const mongoose = require('mongoose')

const BasketSchema = new mongoose.Schema(
  {
    products: [],
    basketTotal: Number,
  },
  { timestamps: true },
)
//BasketSchema.plugin(require('mongoose-autopopulate'))
module.exports = mongoose.model('Basket', BasketSchema)
