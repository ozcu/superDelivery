const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    name: { type: String, required: true, minlength: 2 },
    email: String,
    password: { required: true, minlength: 7, type: String },
    telephone: String,
    address: String,
    addressGeolocation: [],
    creditCardInfo: String,
    basket: { products: [], basketTotal: Number },
    order: {
        activeOrderTotal: Number,
        numberOfOrders: Number,
        oldOrderTotal: Number,
    },
})

//UserSchema.plugin(require('mongoose-autopopulate'))
module.exports = mongoose.model('User', UserSchema)
