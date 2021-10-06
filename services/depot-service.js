const BaseService = require('./base-service')
const Depot = require('../models/depot')

class DepotService extends BaseService {
  async findByName(name) {
    return this.findBy('name', name)
  }
}

module.exports = new DepotService(Depot)
