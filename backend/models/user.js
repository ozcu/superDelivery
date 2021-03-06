const mongoose = require('mongoose')
const { isEmail } = require('validator')
const bcrypt = require('bcrypt')
const basketService = require('../services/basket-service')
const Basket = require('./basket')

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

    addressCoordinates: [],
    basket: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Basket',
        autopopulate: { maxDepth: 1 },
    },

    order: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Order',
        autopopulate: { maxDepth: 1 },
    },
})

//hash user password and register the user
UserSchema.pre('save', async function (next) {
    const salt = await bcrypt.genSalt()
    this.password = await bcrypt.hash(this.password, salt)
    next()
})

//save basket schema and refer in user schema
UserSchema.statics.register = async function (email) {
    const user = await this.findOne({ email })

    const newBasket = new Basket({
        basketTotal: 0,
        products: [],
        user: user._id,
    })
    const basket = await basketService.insert(newBasket)
    const userBasket = { basket: basket._id }
    await User.findOneAndUpdate({ email }, userBasket)
}

//check user and compare the password
UserSchema.statics.login = async function (email, password) {
    const user = await this.findOne({ email })

    if (user) {
        console.log('user matched in db', user.email)
        const auth = await bcrypt.compare(password, user.password)
        if (auth) {
            console.log('password matched', auth)
            return user
        } else {
            throw new Error('incorrect password')
        }
    } else {
        throw new Error('incorrect email')
    }
}

UserSchema.plugin(require('mongoose-autopopulate'))
const User = mongoose.model('User', UserSchema)

module.exports = User
