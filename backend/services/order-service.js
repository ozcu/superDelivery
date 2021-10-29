const BaseService = require('./base-service')
const Order = require('../models/order')
const basketService = require('./basket-service')
class OrderService extends BaseService {
    activateOrder = async (orderId, basketId) => {
        const order = await this.find(orderId)
        const basket = await basketService.find(basketId)
        order.activeOrderTotal = basket.basketTotal

        await this.model.findByIdAndUpdate(orderId, order)
        return { order, basket }
    }

    finalizeOrder = async (orderId, basketId) => {
        const order = await this.find(orderId)
        const basket = await basketService.find(basketId)

        order.oldOrdersTotal += order.activeOrderTotal
        order.activeOrderTotal = 0
        order.numberofOldOrders++

        basket.products = []
        basket.basketTotal = 0

        await this.model.findByIdAndUpdate(orderId, order)
        await basketService.update(basketId, basket)

        return { order, basket }
    }
}
module.exports = new OrderService(Order)
