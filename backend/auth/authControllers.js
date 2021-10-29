const jwt = require('jsonwebtoken')
const { userService } = require('../services')
const User = require('../models/user')

//handle errors
const handleErrors = (err) => {
    console.log(err.message, err.code)
    let errors = { email: '', password: '' }

    //incorrect email
    if (err.message === 'incorrect email') {
        errors.email = 'The email is not registered'
    }
    //incorrect password
    if (err.message === 'incorrect password') {
        errors.password = 'The password is incorrect'
    }

    //duplicate unique email error
    if (err.code === 11000) {
        errors.email = 'That email is already registered'
        return errors
    }

    //validation errors
    if (err.message.includes('User validation failed')) {
        Object.values(err.errors).forEach(({ properties }) => {
            errors[properties.path] = properties.message
        })
    }
    return errors
}

//create JWT Token
const createToken = (id) => {
    return jwt.sign({ id }, process.env.JWTSECRETID, {
        expiresIn: process.env.MAXAGE, //1d
    })
}

//user register & login controller methods
module.exports.register_get = async (req, res) => {
    try {
        res.send(await userService.load())
    } catch (e) {
        throw new Error('User Database cannot be loaded!')
    }
}

module.exports.register_post = async (req, res) => {
    try {
        const user = await userService.insert(req.body)
        const token = createToken(user._id)

        res.status(201).json({ token })
    } catch (err) {
        const errors = handleErrors(err)
        return res.status(400).json({ errors })
    }
}

module.exports.login_get = async (req, res) => {
    try {
        res.send(await userService.load())
    } catch (e) {
        throw new Error('User Database cannot be loaded!')
    }
}

module.exports.login_post = async (req, res) => {
    const { email: email, password: password } = req.body

    try {
        const user = await User.login(email, password)
        const name = user.name
        const token = createToken(user._id)

        res.status(200).json({ token, name })
    } catch (err) {
        const errors = handleErrors(err)
        return res.json({ errors }).status(400)
    }
}
