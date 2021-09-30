const Basket = require("./basket")
const Order = require("./order")
const Product = require("./product")
//const productDatabase = require("../database/product-database")

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

    async addProductToBasket(product){

        this.basket.product.push(product)
        await this.basket.addToBasketTotal(product.price)
        return this.basket.product
        
    }
    
    async removeProductFromBasket(product){
        
        const index = (this.basket.product.indexOf(product))
        this.basket.product.splice(index,1)
       await this.basket.removeFromBasketTotal(product.price)
       return this.basket.product

    }
    emptyBasket(){
        return new Promise((resolve,reject) =>{

            this.basket = new Basket([],0),(err) => {
               
                if (err) return reject(err)
                resolve (this.basket)
            
            }
            
        })
       
        
    }

    finalizeOrder(){
        return new Promise((resolve,reject) =>{

        this.order.activeOrder = [this.basket.product],(err) =>{
            if (err) return reject(err)
            resolve(this.order.activeOrder)
        }

        this.basket.product = [],(err) =>{
            if (err) return reject(err)
            resolve(this.basket.product)
        }

        this.basket.basketTotal = this.order.orderTotal,(err) =>{
            if (err) return reject(err)
            resolve(this.basket.basketTotal)
        }

        this.basket.basketTotal = 0,(err) =>{
            if (err) return reject(err)
            resolve(this.basket.basketTotal)
        }
        
        })
    }

    removeOrder(){
        return new Promise((resolve,reject) =>{

        this.order.activeOrder = [],(err) =>{
            if (err) return reject(err)
            resolve(this.order.activeOrder)
        }
        this.order.orderTotal = 0,(err) => {
            if (err) return reject(err)
            resolve(this.order.orderTotal)
        }

        })
    }

    

    /*
    sonra gelebilecek methodlar=
    useDiscount()
    */

}

module.exports = User