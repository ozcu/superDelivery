const mongoose = require('mongoose')

const DepotSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, minlength: 2 },
    address: String,
    geolocation: [],
    personnel: [],
  },
  { timestamps: true },
)
//CourierSchema.plugin(require('mongoose-autopopulate'))
module.exports = mongoose.model('Depot', DepotSchema)
