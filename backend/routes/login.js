const express = require('express')

const router = express.Router()
const { userService } = require('../services')
const User = require('../models/user')
const bcrypt = require('bcrypt')

router.post('/', async (req, res) => {
    try {
        console.log(req.body)
        await userService.insert(req.body)
        res.send(req.body)
    } catch (e) {
        return res.status(400).send('Cannot insert user!')
    }
})

router.get('/', async (req, res) => {
    try {
        res.send(await userService.load())
    } catch (e) {
        throw new Error('User Database cannot be loaded!')
    }
})

//burada kaldım user login auth
/* userSchema.statics.login = async (email, password) => {
    const user = await userService.find({ email })
    if (user) {
        const auth = await bcrypt.compare(password, user.password)
        if (auth) {
            return user
        }
        throw new Error('incorrect password')
    }
    throw new Error('incorrect email')
}

const User = mongoose.model('User', UserSchema) */

module.exports = router
