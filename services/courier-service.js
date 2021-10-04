const BaseService = require("./base-service");
const Courier = require("../models/courier");

class CourierService extends BaseService {
  async findByName(name) {
    return this.findBy("name", name);
  }
  async findByDepotAddress(depotAddress) {
    return this.findBy("depotAddress", depotAddress);
  }
}

module.exports = new CourierService(Courier);
