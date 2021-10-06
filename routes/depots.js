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
  try {
    const depot = await depotService.find(req.params.depotId)
    res.render('depot', { depot: depot })
  } catch (e) {
    return res.status(404).send('Cannot find depot!')
  }
})

router.post('/', async (req, res) => {
  await depotService.insert(req.body)
  res.send(req.body)
})

router.delete('/:depotId', async (req, res) => {
  await depotService.removeBy('id', req.params.depotId)
  res.send('OK')
})
router.patch('/:depotId', async (req, res) => {
  const { depotId } = req.params
  const { name } = req.body

  await depotService.update(depotId, { name })
  //Does patch only works with one property?
  //patch doesnt work excep user router?
})
module.exports = router
