const uuid = require('uuid')

class Product{
    constructor(id = uuid.v4(), name, photo, description, price, category, hasDiscount ){
        this.id = id
        this.name = name
        this.photo = photo
        this.description = description
        this.price = price
        this.category = category
        this.hasDiscount = hasDiscount
        
        //currency için denedim fakat toplatmıyor bu şekilde NaN geliyor.  console.log(ugurhan.basket.basketTotal)
        //Intl.NumberFowrmat('tr-TR', { style: 'currency', currency: 'TRY' }).format(price)
       }

       static create ({id,name, photo, description, price, category, hasDiscount}){
        return new Product(id,name, photo, description, price, category, hasDiscount)
    }
    
    }




    module.exports = Product
  