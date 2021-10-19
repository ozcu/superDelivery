const express = require('express')
const router = express.Router()
const { orderService } = require('../services')

router.post('/activateOrder/:userId/', async (req, res) => {
  try {
    const { userId } = req.params

    await orderService.activateOrder(userId)
    res.send('OK')
  } catch (e) {
    throw new Error('User order is not activated!')
  }
})

router.post('/finalizeOrder/:userId/', async (req, res) => {
  try {
    const { userId } = req.params

    await orderService.finalizeOrder(userId)
    res.send('OK')
  } catch (e) {
    throw new Error('User order is not finalized!')
  }
})
module.exports = router
