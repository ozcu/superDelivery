const mongoose = require('mongoose')
const { isEmail } = require('validator')
const bcrypt = require('bcrypt')

const UserSchema = new mongoose.Schema({
    name: { type: String },
    email: {
        type: String,
        required: [true, 'Please enter an email'],
        unique: true,
        lowercase: true,
        validate: [isEmail, 'Please enter a valid email'],
    },
    password: {
        required: [true, 'Please enter a password'],
        minlength: [6, 'Minimum password length is 6 characters'],
        type: String,
    },
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

//hash user password and register the user
UserSchema.pre('save', async function (next) {
    const salt = await bcrypt.genSalt()
    this.password = await bcrypt.hash(this.password, salt)
    next()
})

//UserSchema.plugin(require('mongoose-autopopulate'))
const User = mongoose.model('User', UserSchema)
module.exports = User
