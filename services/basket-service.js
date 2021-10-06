const BaseService = require('./base-service')
const userService = require('./user-service')
const productService = require('./product-service')

class BasketService extends BaseService {
  async addProductToBasket(userId, productId) {
    const [newUser] = await userService.findById(userId)
    const [newProduct] = await productService.findById(productId)

    await newUser.basket.products.push(newProduct)
    newUser.basket.basketTotal += newProduct.price

    await userService.update(userId, newUser)

    return newUser, newProduct
  }

  async removeProductFromBasket(userId, productId) {
    const [newUser] = await userService.findById(userId)
    const [newProduct] = await productService.findById(productId)

    const index = await newUser.basket.products.indexOf(newProduct)
    await newUser.basket.products.splice(index, 1)
    newUser.basket.basketTotal -= newProduct.price

    if (newUser.basket.basketTotal <= 0) {
      newUser.basket.basketTotal = 0
    }
    await userService.update(userId, newUser)

    return newUser, newProduct
  }

  async emptyUserBasket(userId) {
    const newUser = await userService.find(userId)
    newUser.basket.products = []
    newUser.basket.basketTotal = 0
    await userService.update(userId, newUser)
    return newUser
  }
}

module.exports = new BasketService()
