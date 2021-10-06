const BaseService = require('./base-service')
const userService = require('./user-service')
class OrderService extends BaseService {
  async activateOrder(userId) {
    const newUser = await userService.find(userId)
    newUser.order.activeOrderTotal = newUser.basket.basketTotal
    await userService.update(userId, newUser)
    return newUser
  }

  async finalizeOrder(userId) {
    const newUser = await userService.find(userId)
    newUser.order.oldOrderTotal += newUser.order.activeOrderTotal

    newUser.order.activeOrderTotal = 0
    newUser.order.numberOfOrders++

    newUser.basket.products = []
    newUser.basket.basketTotal = 0

    await userService.update(userId, newUser)

    return newUser
  }
}
module.exports = new OrderService()
