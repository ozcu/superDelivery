const express = require('express')
const router = express.Router()
const courierBookingService = require('../services/courier-booking-service')

router.post('/add/:courierId/:depotId', async (req, res) => {
  try {
    const { courierId } = req.params
    const { depotId } = req.params
    await courierBookingService.addCourierToDepot(courierId, depotId)
    res.send('OK')
  } catch (e) {
    throw new Error('Courier not added to depot!')
  }
})
router.post('/remove/:courierId/:depotId', async (req, res) => {
  try {
    const { courierId } = req.params
    const { depotId } = req.params
    await courierBookingService.removeCourierFromDepot(courierId, depotId)
    res.send('OK')
  } catch (e) {
    throw new Error('Courier not added to depot!')
  }
})
module.exports = router
