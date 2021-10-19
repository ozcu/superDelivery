const BaseService = require('./base-service')
const userService = require('./user-service')
const productService = require('./product-service')

class BasketService extends BaseService {
    async addProductToBasket(userId, productId) {
        const user = await userService.find(userId)
        const product = await productService.find(productId)
        await user.basket.products.push(product)
        user.basket.basketTotal += product.price
        await userService.update(userId, user)

        return { user, product }
    }

    async removeProductFromBasket(userId, productId) {
        const user = await userService.find(userId)
        const product = await productService.find(productId)

        const index = await user.basket.products.indexOf(product)
        await user.basket.products.splice(index, 1)
        user.basket.basketTotal -= product.price

        if (user.basket.basketTotal <= 0) {
            user.basket.basketTotal = 0
        }
        await userService.update(userId, user)

        return { user, product }
    }

    async emptyUserBasket(userId) {
        const user = await userService.find(userId)
        user.basket.products = []
        user.basket.basketTotal = 0
        await userService.update(userId, user)
        return user
    }
}

module.exports = new BasketService()
