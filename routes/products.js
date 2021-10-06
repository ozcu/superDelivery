const express = require('express')
const router = express.Router()
const { productService } = require('../services')
const Product = require('../models/product')

router.get('/', async (req, res) => {
  try {
    const products = await productService.load()
    res.render('products', { products: products })
  } catch (e) {
    throw new Error('Product database cannot be loaded!')
  }
})

router.get('/:productId', async (req, res) => {
  try {
    const product = await productService.find(req.params.productId)
    res.render('product', { product: product })
  } catch (e) {
    return res.status(404).send('Cannot find product!')
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
