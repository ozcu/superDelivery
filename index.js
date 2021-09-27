const User = require('./user')
const Product =require('./product')
const Basket = require('./basket')
const Order = require('./order')
const UserDatabase = require('./user-database')
const ProductDatabase = require('./product-database')
const colors = require('colors')



const ugurhan = new User(('Ugurhan'),'asd@gmail.com','+90555555555','Bostancı mh',[40.955,29.104],'55555555555555551023111')
const banana = new Product('Banana','bananaPhoto','250g', 2.5, 'Fruit',false)
const bread = new Product('Bread','breadPhoto','1xBread 120g', 1.5, 'Baked Product(s)', false)
const water = new Product('Water','waterPhoto','1xBottle', 1.0, 'Water', false)
const basket = new Basket([],0,[],0)

//db.save('users', [ugurhan])
//db.save('products',[banana])
//db.save('baskets',[basket])


//const users = db.load ('users')
//const products = db.load('products')



console.log(basket.basketTotal)

ugurhan.addProductToBasket(banana,basket) // burada ikinci parametreyi cıkarmak istiyorum
console.log(basket.basketTotal)

ugurhan.addProductToBasket(bread,basket)
console.log(basket.basketTotal)

//console.log(users)
//console.log(products)

console.log("******************")

//db.insert('products',bread)
//db.load('products')
//console.log(products) // neden sadece 0. indexi yazıyor log? jsonu dolduruyor insert
//debug ekranda başta doluyor sonra gidiyor save etmiyor gibi sanki.

//db.remove('products',1)

ProductDatabase.save([banana,bread,water])
const newUser = UserDatabase.findByName('Ugurhan')//->Product ismi girince geliyor birşey ters yoruldum göremiyorum :)
console.log(newUser)

//newUser.addProductToBasket(water,basket)
//console.log(basket)



//console.log(JSON.stringify(productDatabase))


