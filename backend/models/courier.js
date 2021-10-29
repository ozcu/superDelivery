const mongoose = require('mongoose')

const CourierSchema = new mongoose.Schema({
    name: { type: String, required: true, minlength: 2 },
    rating: Number,
    available: Boolean,
})
const Courier = mongoose.model('Courier', CourierSchema)
module.exports = Courier
