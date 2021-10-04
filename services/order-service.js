const BaseService = require('./base-service')
const Order = require('../models/order')
const Basket = require('../models/basket')
const User = require('../models/user')

class OrderService extends BaseService {
  async findByName(name) {
    return this.findBy('name', name)
  }

  //mongoose schemasına göre düzenlenmesi gerekiyor
  finalizeOrder() {
    return new Promise((resolve, reject) => {
      ;(this.order.activeOrder = [this.basket.product]),
        (err) => {
          if (err) return reject(err)
          resolve(this.order.activeOrder)
        }
      ;(this.basket.product = []),
        (err) => {
          if (err) return reject(err)
          resolve(this.basket.product)
        }
      ;(this.basket.basketTotal = this.order.orderTotal),
        (err) => {
          if (err) return reject(err)
          resolve(this.basket.basketTotal)
        }
      ;(this.basket.basketTotal = 0),
        (err) => {
          if (err) return reject(err)
          resolve(this.basket.basketTotal)
        }
    })
  }
  //mongoose schemasına göre düzenlenmesi gerekiyor
  removeOrder() {
    return new Promise((resolve, reject) => {
      ;(this.order.activeOrder = []),
        (err) => {
          if (err) return reject(err)
          resolve(this.order.activeOrder)
        }
      ;(this.order.orderTotal = 0),
        (err) => {
          if (err) return reject(err)
          resolve(this.order.orderTotal)
        }
    })
  }
}

module.exports = new OrderService(Order)
