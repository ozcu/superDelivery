const BaseService = require('./base-service')
const userService = require('./user-service')
class OrderService extends BaseService {
    async activateOrder(userId) {
        const user = await userService.find(userId)
        user.order.activeOrderTotal = user.basket.basketTotal
        await userService.update(userId, user)
        return user
    }

    async finalizeOrder(userId) {
        const user = await userService.find(userId)
        newUser.order.oldOrderTotal += user.order.activeOrderTotal

        user.order.activeOrderTotal = 0
        user.order.numberOfOrders++

        user.basket.products = []
        user.basket.basketTotal = 0

        await userService.update(userId, user)

        return user
    }
}
module.exports = new OrderService()
