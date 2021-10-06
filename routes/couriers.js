const express = require('express')
const router = express.Router()
const { courierService } = require('../services')

router.get('/', async (req, res) => {
  try {
    const couriers = await courierService.load()
    res.render('couriers', { couriers: couriers })
  } catch (e) {
    throw new Error('User Database cannot be loaded!')
  }
})

router.get('/:courierId', async (req, res) => {
  try {
    const courier = await courierService.find(req.params.courierId)
    res.render('courier', { courier: courier })
  } catch (e) {
    return res.status(404).send('Cannot find courier!')
  }
})

router.post('/', async (req, res) => {
  await courierService.insert(req.body)
  res.send(req.body)
})

router.delete('/:courierId', async (req, res) => {
  await courierService.removeBy('id', req.params.courierId)
  res.send('OK')
})

router.patch('/:courierId', async (req, res) => {
  const { courierId } = req.params
  const { name } = req.body

  await courierService.update(courierId, { name })
  //Does patch only works with one property?
})

module.exports = router
