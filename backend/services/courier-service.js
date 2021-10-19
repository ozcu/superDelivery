const BaseService = require('./base-service')
const Courier = require('../models/courier')

class CourierService extends BaseService {
  async findByName(name) {
    return this.findBy('name', name)
  }
}

module.exports = new CourierService(Courier)
