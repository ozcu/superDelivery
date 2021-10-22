const express = require('express')
const jwt = require('jsonwebtoken')
const router = express.Router()
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

//const maxAge = 1 * 24 * 60 * 60 //  valid for 1 day
//create token
const createToken = (id) => {
    return jwt.sign({ id }, process.env.JWTSECRETID, {
        expiresIn: process.env.MAXAGE, //1day
    })
}
//üstteki de aynı sekilde token ortak yerden gelecek
//handle login request  *** direk user modeli kullanıyorum user service'e çevirmek için bak /services/user-service***
router.post('/', async (req, res) => {
    const { email: email, password: password } = req.body
    console.log('request body ', email, password)
    try {
        const user = await User.login(email, password)
        console.log('returned matched user', user.email)

        const token = createToken(user._id)
        /*     res.cookie('jwt', token, {
            httpOnly: false,
            maxAge: maxAge * 1000,
        }) */

        console.log('token generated:', token)
        res.status(200).json({ token })
    } catch (err) {
        const errors = handleErrors(err)
        return res.json({ errors }).status(400) //tersi olduğunda objeyi alamıyorum json olarak vue'da fakat postman da geliyor ikisi de.
    }
})

router.get('/', async (req, res) => {
    try {
        res.send(await userService.load())
    } catch (e) {
        throw new Error('User Database cannot be loaded!')
    }
})

/* router.get('/set-cookies', async (req, res) => {
    try {
        const cookie = res.cookie('testCookie', true)
        console.log(cookie.rawHeaders)
        res.status(200).send('OK')
    } catch (e) {
        throw new Error('User Database cannot be loaded!')
    }
}) */

module.exports = router
