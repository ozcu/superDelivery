const express = require('express')
const router = express.Router()
const { depotService } = require('../services')

router.get('/', async (req, res) => {
  try {
    const depots = await depotService.load()
    res.render('depots', { depots: depots })
  } catch (e) {
    throw new Error('Depot database cannot be loaded!')
  }
})

router.get('/:depotId', async (req, res) => {
  const depot = await depotService.find(req.params.depotId)
  res.render('depot', { depot: depot })

  //null gelirse 404 verdiremedim promise'e takılıyor catch koyunca property name patlıyor view içinde
})

router.post('/', async (req, res) => {
  await depotService.insert(req.body)
  console.log(req.body)
  res.send(req.body)
})

router.delete('/:depotId', async (req, res) => {
  await depotService.removeBy('id', req.params.depotId)
  res.send('OK')
})

module.exports = router
