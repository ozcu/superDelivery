class Basket{
    constructor(product, basketTotal){
        this.product = []
        this.basketTotal = basketTotal
        
    }
    
    addToBasketTotal (price){
    this.basketTotal =  this.basketTotal + price
    return this.basketTotal
    }

    removeFromBasketTotal (price){
        this.basketTotal =  this.basketTotal - price
    return this.basketTotal
    }
    
    
}



module.exports = Basket