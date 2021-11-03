const express = require('express')
const router = express.Router()
const { basketService } = require('../services')

router.get('/', async (req, res) => {
    try {
        res.send(await basketService.load())
    } catch (err) {
        throw new Error('Basket db cannot be loaded!')
    }
})
//add remove olmamalı başlarında değiştir fakat o identifier olmadan ikisi de aynı?
router.post('/:basketId/add/:productId', async (req, res) => {
    try {
        const { basketId } = req.params
        const { productId } = req.params
        await basketService.addProductToBasket(basketId, productId)
        res.send('OK')
    } catch (e) {
        throw new Error('Product not added to basket!')
    }
})

router.post('/:basketId/remove/:productId', async (req, res) => {
    try {
        const { basketId } = req.params
        const { productId } = req.params
        await basketService.removeProductFromBasket(basketId, productId)
        res.send('OK')
    } catch (e) {
        throw new Error('Product not removed from basket!')
    }
})

router.post('/emptyBasket/:basketId', async (req, res) => {
    try {
        const { basketId } = req.params
        await basketService.emptyBasket(basketId)
        res.send('OK')
    } catch (e) {
        throw new Error('Cannot empty the basket!')
    }
})

module.exports = router
