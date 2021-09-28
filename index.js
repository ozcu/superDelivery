const User = require('./user')
const Product =require('./product')
const Basket = require('./basket')
const Order = require('./order')
const {userDatabase, productDatabase} = require('./database/index')





const ugurhan = new User('Ugurhan','asd@gmail.com','+90555555555','Bostancı mh',[40.955,29.104],'55555555555555551023111')
const banana = new Product(undefined,'Banana','bananaPhoto','250g', 2.5, 'Fruit',false)
const bread = new Product(undefined,'Bread','breadPhoto','1xBread 120g', 1.5, 'Baked Product(s)', false)
const water = new Product(undefined,'Water','waterPhoto','1xBottle', 1.0, 'Water', false)



//const users = db.load ('users')
//const products = db.load('products')



//console.log(users)
//console.log(products)


ugurhan.addProductToBasket(banana)
ugurhan.addProductToBasket(bread)

ugurhan.removeProductFromBasket(banana)

productDatabase.save([banana])
userDatabase.save([ugurhan])



productDatabase.update(water)
/*
const newUserDataBase = userDatabase.load()
console.log(newUserDataBase)

const newProductDataBase = productDatabase.load() //--> bu calısmıyor fakat user database calısıyor?
console.log(newProductDataBase)
*/

//const osman = User.create({name:'osman'})
//console.log(osman)


//const newUser = userDatabase.findByName('Ugurhan')

//newUser.finalizeOrder()


