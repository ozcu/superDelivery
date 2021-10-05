const BaseService = require('./base-service')
const userService = require('./user-service')

class BasketService extends BaseService {
  async addProductToBasket(userId, product) {
    const newUser = await userService.find(userId)
    await newUser.basket.products.push(product)

    newUser.basket.basketTotal = newUser.basket.basketTotal + product.price

    await userService.update(userId, newUser)

    return newUser
  }

  async removeProductFromBasket(userId, product) {
    const newUser = await userService.find(userId)
    const index = await newUser.basket.products.indexOf(product)
    await newUser.basket.products.splice(index, 1)

    newUser.basket.basketTotal = newUser.basket.basketTotal - product.price
    if (newUser.basket.basketTotal <= 0) {
      newUser.basket.basketTotal = 0
    }

    await userService.update(userId, newUser)

    return newUser
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
