const User = require('./user')
const Product =require('./product')
//const Basket = require('./basket')
//const Order = require('./order')
const userDatabase = require('./user-database')
const productDatabase = require('./product-database')




const ugurhan = new User(('Ugurhan'),'asd@gmail.com','+90555555555','Bostancı mh',[40.955,29.104],'55555555555555551023111')
const banana = new Product('Banana','bananaPhoto','250g', 2.5, 'Fruit',false)
const bread = new Product('Bread','breadPhoto','1xBread 120g', 1.5, 'Baked Product(s)', false)
const water = new Product('Water','waterPhoto','1xBottle', 1.0, 'Water', false)



//const users = db.load ('users')
//const products = db.load('products')
//console.log(ugurhan.basket)


//console.log(users)
//console.log(products)


ugurhan.addProductToBasket(banana)
ugurhan.addProductToBasket(bread)
ugurhan.removeProductFromBasket(banana)

console.log(ugurhan.basket.product)
/*
console.log("******************")
ugurhan.finalizeOrder()
console.log(ugurhan.basket.product)
console.log(ugurhan.order)
ugurhan.removeOrder()
console.log("******************")
console.log(ugurhan.order)

*/

productDatabase.save([banana,bread,water])
userDatabase.save([ugurhan])

const newUser = userDatabase.findByName('Ugurhan')



//console.log(newUser)





/*

User.create ({name:'demirhan',address:'beyoglu mh',order1})
const newUser2 = userDatabase.findByName('demirhan')
console.log(newUser2)
*/
//newUser.addProductToBasket(water,basket)
//console.log(basket)





