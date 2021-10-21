const express = require('express')
const router = express.Router()
const { userService } = require('../services')
const jwt = require('jsonwebtoken')

//login ve register birlesecek.

//handle errors
const handleErrors = (err) => {
    console.log(err.message, err.code)
    let errors = { email: '', password: '' }

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

const maxAge = 1 * 24 * 60 * 60 //  valid for 1 day

//create token
const createToken = (id) => {
    return jwt.sign({ id }, 'secretid', {
        expiresIn: maxAge,
    })
}

router.post('/', async (req, res) => {
    try {
        const user = await userService.insert(req.body)
        const token = createToken(user._id)
        res.cookie('jwt', token, {
            httpOnly: true,
            maxAge: maxAge * 1000,
        })
        const cookie = res.cookie('testCookie', true)
        console.log(user, token)
        console.log(cookie)
        res.status(201).json({ user: user._id })
    } catch (err) {
        const errors = handleErrors(err)
        return res.status(400).json({ errors }) //tersi olduğunda objeyi alamıyorum json olarak vue'da fakat postman da geliyor ikisi de.
    }
})

router.get('/', async (req, res) => {
    try {
        res.send(await userService.load())
    } catch (e) {
        throw new Error('User Database cannot be loaded!')
    }
})
module.exports = router
