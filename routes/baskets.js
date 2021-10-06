const express = require('express')
const router = express.Router()
const { basketService } = require('../services')

router.post('/:userId/:productId', async (req, res) => {
  const { userId } = req.params
  const { productId } = req.params
  await basketService.addProductToBasket(userId, productId)
  res.send('OK')

  //Neden çalışmadı nasıl debug edebilirim?
})

module.exports = router
