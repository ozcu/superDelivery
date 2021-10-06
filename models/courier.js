const mongoose = require('mongoose')

const CourierSchema = new mongoose.Schema(
  {
    courierName: { type: String, required: true, minlength: 2 },
    rating: Number,
  },
  { timestamps: true },
)
//CourierSchema.plugin(require('mongoose-autopopulate'))
module.exports = mongoose.model('Courier', CourierSchema)
