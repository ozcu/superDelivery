const express = require('express')
const router = express.Router()
const { productService } = require('../services')

router.get('/', async (req, res) => {
    try {
        const products = await productService.load()
        res.json({ products }).status(200)
    } catch (e) {
        return res.send('Cannot load product database!').status(404)
    }
})

router.get('/:productId', async (req, res) => {
    try {
        const product = await productService.find(req.params.productId)
        res.json({ product }).status(200)
    } catch (e) {
        return res.send('Cannot find product!').status(404)
    }
})

router.post('/', async (req, res) => {
    productService.insert(req.body)
    res.send(req.body)
})

router.delete('/:productId', async (req, res) => {
    await productService.removeBy('id', req.params.productId)
    res.send('OK')
})

router.patch('/:productId', async (req, res) => {
    const { productId } = req.params
    const { name } = req.body

    await productService.update(productId, { name })
})
module.exports = router
