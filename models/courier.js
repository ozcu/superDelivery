const mongoose = require('mongoose')

const CourierSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, minlength: 2 },
    depotAddress: String,
  },
  { timestamps: true },
)
//CourierSchema.plugin(require('mongoose-autopopulate'))
module.exports = mongoose.model('Courier', CourierSchema)
