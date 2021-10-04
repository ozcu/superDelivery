const express = require('express')
const router = express.Router()
const { courierService } = require('../services')

router.get('/', async (req, res) => {
  try {
    const couriers = await courierService.load()
    res.render('couriers', { couriers: couriers })
  } catch (e) {
    throw new Error('Courier database cannot be loaded!')
  }
})

router.get('/:courierId', async (req, res) => {
  const courier = await courierService.find(req.params.courierId)
  res.render('courier', { courier: courier })

  //61599dbe049c637f300155f7

  //null gelirse 404 verdiremedim promise'e takılıyor catch koyunca property name patlıyor view içinde
})

router.post('/', async (req, res) => {
  await courierService.insert(req.body)
  console.log(req.body)
  res.send(req.body)
})

router.delete('/:courierId', async (req, res) => {
  await courierService.removeBy('id', req.params.courierId)
  res.send('OK')
})

module.exports = router
