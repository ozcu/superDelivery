const BaseService = require('./base-service')
const Basket = require('../models/basket')
const productService = require('./product-service')

class BasketService extends BaseService {
    async findById(id) {
        return this.findBy('_id', id)
    }
    emptyBasket = async (basketId) => {
        const basket = await this.find(basketId)
        basket.products = []
        basket.basketTotal = 0
        await this.model.findByIdAndUpdate(basketId, basket)
        return basket
    }
    addProductToBasket = async (basketId, productId) => {
        const basket = await this.find(basketId)
        const [product] = await productService.find(productId) //depot-service doesnt need this why??

        await basket.products.push(product)
        basket.basketTotal += product.price
        await this.model.findByIdAndUpdate(basketId, basket)

        return { basket, product }
    }
    removeProductFromBasket = async (basketId, productId) => {
        const basket = await this.find(basketId)
        const [product] = await productService.find(productId)

        const index = await basket.products.indexOf(product)
        await basket.products.splice(index, 1)
        basket.basketTotal -= product.price

        if (basket.basketTotal <= 0) {
            basket.basketTotal = 0
        }

        await this.model.findByIdAndUpdate(basketId, basket)

        return { basket, product }
    }
}

module.exports = new BasketService(Basket)
