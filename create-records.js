const User = require('./models/user')
const Product =require('./models/product')
const Order = require("./models/order")
const {userDatabase, productDatabase} = require('./database/index')




const ugurhan = new User('Ugurhan','asd@gmail.com','+90555555555','Bostancı mh',[40.955,29.104],'55555555555555551023111')
const banana = new Product(undefined,'Banana','bananaPhoto','250g', 2.5, 'Fruit',false)
const bread = new Product(undefined,'Bread','breadPhoto','1xBread 120g', 1.5, 'Baked Product(s)', false)
const water = new Product(undefined,'Water','waterPhoto','1xBottle', 1.0, 'Water', false)



ugurhan.addProductToBasket([water]) 


async function main(){
 try {
    
   
    ugurhan.addProductToBasket(bread)

    
    ugurhan.emptyBasket().then(console.log('test'))
     ugurhan.order = new Order ('oldOrder',['oldOrder1','olrOrder2'],['activeOrder'],)
   console.log(ugurhan)

   ugurhan.removeOrder().then(console.log('test2'))

    
    await userDatabase.save([ugurhan])
    await productDatabase.save([banana])

    const salt = Product.create({ name:'Salt', category:'unknown'})
    await productDatabase.insert([water])
    await productDatabase.insert([salt])
    await productDatabase.insert([water]) //-> Insert identical için ilk başta hata aldım sonra alamadım
    
    await userDatabase.load()
   // await productDatabase.insert([water])

   // await productDatabase.remove(2)
   //const newSalt =  await productDatabase.findBy('category','unknown')
   // console.log(newSalt)

   // productDatabase.update(newSalt)
    
    await userDatabase.findByName('Ugurhan')
    await productDatabase.findByName('Banana')
    

    } catch (e){
        return console.log(e)
    }

}

main()