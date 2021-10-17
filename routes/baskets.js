const express = require('express')
const router = express.Router()
const { basketService } = require('../services')

router.post('/add/:userId/:productId', async (req, res) => {
  try {
    const { userId } = req.params
    const { productId } = req.params
    await basketService.addProductToBasket(userId, productId)
    res.send('OK')
  } catch (e) {
    throw new Error('Product not added to basket!')
  }
})

router.post('/remove/:userId/:productId', async (req, res) => {
  try {
    const { userId } = req.params
    const { productId } = req.params
    await basketService.removeProductFromBasket(userId, productId)
    res.send('OK')
  } catch (e) {
    throw new Error('Product not removed from basket!')
  }
})

router.post('/emptyBasket/:userId', async (req, res) => {
  try {
    const { userId } = req.params
    await basketService.emptyUserBasket(userId)
    res.send('OK')
  } catch (e) {
    throw new Error('Cannot empty the basket!')
  }
})

module.exports = router
