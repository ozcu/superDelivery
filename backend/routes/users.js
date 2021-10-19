const express = require('express')
const router = express.Router()
const { userService } = require('../services')

router.get('/', async (req, res) => {
    try {
        res.send(await userService.load())
    } catch (e) {
        throw new Error('User Database cannot be loaded!')
    }
})

router.get('/:userId', async (req, res) => {
    try {
        res.send(await userService.find(req.params.userId))
    } catch (e) {
        return res.status(404).send('Cannot find user!')
    }
})

router.post('/', async (req, res) => {
    try {
        console.log(req.body)
        await userService.insert(req.body)
        res.send(req.body)
    } catch (e) {
        return res.status(400).send('Cannot insert user!')
    }
})

router.delete('/:userId', async (req, res) => {
    await userService.removeBy('id', req.params.userId)
    res.send('OK')
})

router.patch('/:userId', async (req, res) => {
    const { name } = req.body

    await userService.update(userId, { name })
    //Does patch only works with one property?
})

module.exports = router
