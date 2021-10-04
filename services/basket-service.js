const BaseService = require('./base-service')
const Basket = require('../models/basket')
const Product = require('../models/product')
const User = require('../models/user')

class BasketService extends BaseService {
  async findById(id) {
    return this.findBy('id', id)
  }
  async addProductToBasket(product) {
    this.basket = {}
    this.basket.products = []
    this.basket.products.push(product) // mongoose schemaya a göre ok mi bak
    //await this.basket.addToBasketTotal(product.price)

    //console.log(this.basket)
    return this.basket.products
  }

  async addToBasketTotal(price) {
    return new Promise((resolve, reject) => {
      ;(this.basketTotal = this.basketTotal + price),
        (err) => {
          if (err) return reject(err)
          resolve(this.basketTotal)
        }
    })
  }

  async removeProductFromBasket(product) {
    const index = this.basket.product.indexOf(product) // mongoose a göre yazılabilir mi bak
    this.basket.product.splice(index, 1)
    await this.basket.removeFromBasketTotal(product.price)
    return this.basket.product
  }
  removeFromBasketTotal(price) {
    return new Promise((resolve, reject) => {
      ;(this.basketTotal = this.basketTotal - price),
        (err) => {
          if (err) return reject(err)
          resolve(this.basketTotal)
        }
    })
  }
  emptyBasket() {
    // mongoose schemaya göre düzenlenmesi lazım
    return new Promise((resolve, reject) => {
      ;(this.basket = new Basket([], 0)),
        (err) => {
          if (err) return reject(err)
          resolve(this.basket)
        }
    })
  }
}

module.exports = new BasketService(Basket)
