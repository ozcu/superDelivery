const BaseService = require('./base-service')
const courierService = require('./courier-service')
const depotService = require('./depot-service')

class CourierBookingService extends BaseService {
    //user coordinates will be checked with closest depot coordinates
    //depot will assign available courier
    //user will book courier after order finalized.
}

module.exports = new CourierBookingService()
