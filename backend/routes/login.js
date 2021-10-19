const express = require('express')
const router = express.Router()
const { userService } = require('../services')

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
module.exports = router
