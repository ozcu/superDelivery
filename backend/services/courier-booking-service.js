const BaseService = require('./base-service')
const courierService = require('./courier-service')
const depotService = require('./depot-service')

class CourierBookingService extends BaseService {
    async addCourierToDepot(courierId, depotId) {
        const courier = await courierService.find(courierId)
        const depot = await depotService.find(depotId) //find a gerek yok add eklenebilir

        await depot.personnel.push(courier)
        await depotService.update(depotId, depot)

        return depot, courier //obje alıyor
    }

    async removeCourierFromDepot(courierId, depotId) {
        const courier = await courierService.find(courierId)
        const depot = await depotService.find(depotId)

        const index = await depot.personnel.indexOf(courier)
        await depot.personnel.splice(index, 1)

        await depotService.update(depotId, depot)

        return depot, courier
    }
}

module.exports = new CourierBookingService()
