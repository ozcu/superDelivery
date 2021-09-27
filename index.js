const User = require('./user')
const Product =require('./product')
const Basket = require('./basket')
const Order = require('./order')


const user1 = new User('Ugurhan','ugurhan.buyukozcu@gmail.com','+905356645867','Bostancı mh',[41.4,2.17],'55555555555555551023111')
const banana = new Product('Banana','bananaPhoto','250g', 2.5, 'Fruit',false)
const bread = new Product('Bread','breadPhoto','1xBread 120g',1.5, 'Baked Product(s)', false)


//const basket = new Basket([],0,[],0)

basket.basketTotal = 0

user1.addProductToBasket(banana,basket)

user1.addProductToBasket(bread,basket)

user1.removeProductFromBasket(banana,basket)

console.log(JSON.stringify(basket))
