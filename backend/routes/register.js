const express = require('express')
const router = express.Router()
const { userService } = require('../services')

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

router.post('/', async (req, res) => {
    const { email, password } = req.body

    try {
        await userService.insert({ email, password })
        res.status(201).json({ email, password })
    } catch (err) {
        const errors = handleErrors(err)
        return res.status(400).json({ errors })
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
