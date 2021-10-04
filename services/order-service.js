const BaseService = require("./base-service");
const Order = require("../models/order");

class OrderService extends BaseService {
  async findByName(name) {
    return this.findBy("name", name);
  }
}

module.exports = new OrderService(Order);
