const BaseService = require('./base-service')
const Product = require('../models/product')

class ProductService extends BaseService {
    async findByName(name) {
        return this.findBy('name', name)
    }
    async findById(id) {
        return this.findBy('_id', id)
    }
    async find(id) {
        return this.findById(id)
    }
}

module.exports = new ProductService(Product)
