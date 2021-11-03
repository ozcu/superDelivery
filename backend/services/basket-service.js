const BaseService = require('./base-service')
const Basket = require('../models/basket')
const productService = require('./product-service')

class BasketService extends BaseService {
    async findById(id) {
        return this.findBy('_id', id)
    }
    emptyBasket = async (basketId) => {
        try {
            const basket = await this.find(basketId)
            basket.products = []
            basket.basketTotal = 0
            await this.model.findByIdAndUpdate(basketId, basket)
            return basket
        } catch (err) {
            console.log(err)
        }
    }
    addProductToBasket = async (basketId, productId) => {
        try {
            const basket = await this.find(basketId)
            const [product] = await productService.find(productId) //depot-service doesnt need this as array why??

            await basket.products.push(product)
            basket.basketTotal += product.price
            await this.model.findByIdAndUpdate(basketId, basket)

            return { basket, product }
        } catch (err) {
            console.log(err)
        }
    }
    removeProductFromBasket = async (basketId, productId) => {
        try {
            const basket = await this.find(basketId)
            const [product] = await productService.find(productId)
            const index = await basket.products.findIndex(
                (x) => x.id == `${product.id}`,
            )

            if (index >= 0) {
                await basket.products.splice(index, 1)
                basket.basketTotal -= product.price
                if (basket.basketTotal <= 0) {
                    basket.basketTotal = 0
                }
                await this.model.findByIdAndUpdate(basketId, basket)
                return { basket, product }
            } else {
                return
            }
        } catch (err) {
            console.log(err)
        }
    }
}

module.exports = new BasketService(Basket)
