class Basket{
    constructor(product, basketTotal){
        this.product = []
        this.basketTotal = basketTotal
        
    }
    
    addToBasketTotal (price){
        return new Promise((resolve,reject) => {
        this.basketTotal =  this.basketTotal + price,(err) =>{
        if (err) return reject(err)
        resolve(this.basketTotal)
        }
        })
    }


    removeFromBasketTotal (price){
        return new Promise((resolve,reject) => {
        this.basketTotal =  this.basketTotal - price,(err) =>{
        if (err) return reject(err)
        resolve(this.basketTotal)
        }
        })
    }
    
    
}



module.exports = Basket