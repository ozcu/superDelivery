const BaseService = require('./base-service')
const courierService = require('./courier-service')
const depotService = require('./depot-service')

class CourierBookingService extends BaseService {
  async addCourierToDepot(courierId, depotId) {
    const newCourier = await courierService.find(courierId)
    const newDepot = await depotService.find(depotId)

    await newDepot.personnel.push(newCourier)
    await depotService.update(depotId, newDepot)

    return newDepot, newCourier
  }

  async removeCourierFromDepot(courierId, depotId) {
    const newCourier = await courierService.find(courierId)
    const newDepot = await depotService.find(depotId)

    const index = await newDepot.personnel.indexOf(newCourier)
    await newDepot.personnel.splice(index, 1)

    await depotService.update(depotId, newDepot)

    return newDepot, newCourier
  }
}

module.exports = new CourierBookingService()
