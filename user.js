const Basket = require("./basket")
const Order = require("./order")
const Product = require("./product")
const productDatabase = require("./database/product-database")

class User {

    constructor(name,email,telephone,address,addressGeolocation,creditCardInfo,basket,order){
        this.name = name
        this.email = email
        this.telephone = telephone
        this.address = address
        this.addressGeolocation = []
        this.creditCardInfo = creditCardInfo
        this.basket = new Basket([],0)
        this.order = new Order ('',[],[],0)
        
    }

    static create ({name,email,telephone,address,addressGeolocation,creditCardInfo,basket,order}){
        return new User(name,email,telephone,address,addressGeolocation,creditCardInfo,basket,order)
    }


    addProductToBasket(product){

        this.basket.product.push(product)
        this.basket.addToBasketTotal(product.price)
        
    }
    
    removeProductFromBasket(product){
        
        const index = (this.basket.product.indexOf(product))
        this.basket.product.splice(index,1)
        this.basket.removeFromBasketTotal(product.price)

    }
    emptyBasket(){
        this.basket = new Basket([],0)
        
    }

    finalizeOrder(){
        this.order.activeOrder =  [this.basket.product]
        this.basket.product = []

        this.basket.basketTotal = this.order.orderTotal
        this.basket.basketTotal = 0
    }

    removeOrder(){
        this.order.activeOrder = []
        this.order.orderTotal = 0
    }

    

    /*
    sonra gelebilecek methodlar
    useDiscount()
    */

}

module.exports = User