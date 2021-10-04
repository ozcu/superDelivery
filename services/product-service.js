const BaseService = require('./base-service')
const Product = require('../models/product')

class ProductService extends BaseService {
  async findByName(name) {
    return this.findBy('name', name)
  }
}

module.exports = new ProductService(Product)
