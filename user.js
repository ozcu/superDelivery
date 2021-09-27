const Basket = require("./basket")

class User {

    constructor(name,email,telephone,address,addressGeolocation,creditCardInfo){
        this.name = name
        this.email = email
        this.telephone = telephone
        this.address = address
        this.addressGeolocation = []
        this.creditCardInfo = creditCardInfo
        
    }
    addProductToBasket(product,basket){
        const addedProduct = new Basket(product,basket)
        basket.product.push(product)
        console.log('I have added the' + JSON.stringify(product))
    }
    removeProductFromBasket(product,basket){
        const removedProduct = new Basket(product,basket)
        basket.product.pop(product)
        console.log('I have removed the' + JSON.stringify(product))
    }



    /*
    removeProductFromBasket()
    finalizeOrder()
    useDiscount()
    */

}

module.exports = User