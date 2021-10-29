const BaseService = require('./base-service')
const Depot = require('../models/depot')
const courierService = require('./courier-service')

class DepotService extends BaseService {
    async findByName(name) {
        return this.findBy('name', name)
    }

    addCourierToDepot = async (depotId, courierId) => {
        const depot = await this.find(depotId)
        const courier = await courierService.find(courierId)
        console.log(courier)

        //  await depot.couriers.push(courier)
        // await this.model.findByIdAndUpdate(depotId, depot)
        return { depot, courier }
    }
    removeCourierFromDepot = async (depotId, courierId) => {
        const depot = await this.find(depotId)
        const courier = await courierService.find(courierId)
        const index = await depot.couriers.indexOf(courier)
        await depot.couriers.splice(index, 1)
        await this.model.findByIdAndUpdate(depotId, depot)
        return { depot, courier }
    }
}

module.exports = new DepotService(Depot)
