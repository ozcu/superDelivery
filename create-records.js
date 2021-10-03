require('./mongo-connection')
const User = require('./models/user')
const Product = require('./models/product')
const Basket = require('./models/basket')
const Order = require('./models/order')

const {userService, productService} = require('./services/index')
const product = require('./models/product')


//const osman = User.create({name:'Osman',email:'osman@osman.com'})

//

//const bread = Product.create({name:'bread',description:'120g'})

async function main(){
  try{
   // const ugurhan = await User.create({name: 'Ugurhan',email:'ugurhan@gmail.com'})
     const water = Product.create({name:'water',description:'1xbottle'})
    
   //await productService.insert(bread)
 
  }catch(e){
    return console.log(e)
  }


}

main()





/*


//productDatabase.save(bread)
//userDatabase.save(ugurhan)


//
async function main(){
    try {

     //   await userDatabase.save(ugurhan)
      //  await productDatabase.save(bread)
   await userDatabase.save(user1)
   await userDatabase.load()
      //  console.log(ugurhan)
    //    console.log(userDatabase)
      //  console.log('****')

      
      
        } catch (e){
        return console.log(e)
    }

}

main()





    /*
    ugurhan.emptyBasket().then(console.log('test'))
    ugurhan.order = new Order ('oldOrder',['oldOrder1','olrOrder2'],['activeOrder'],)
     const newobj =  await productDatabase.findByName('Water')


   ugurhan.removeOrder().then(console.log('test2'))
  //  await userDatabase.insert([user1])
    
    await userDatabase.save({ugurhan,user1})
   // await productDatabase.save([banana])

    const salt = Product.create({ name:'Salt', category:'unknown'})
    await productDatabase.insert([water])
    await productDatabase.insert([salt])
    await productDatabase.insert([water]) //-> Insert identical için ilk başta hata aldım sonra alamadım
    
  //  await userDatabase.load()  BURASI PATLIYOR GİBİ
    

    await productDatabase.remove(2)
   const newSalt =  await productDatabase.findBy('category','unknown')
    console.log(newSalt)

    productDatabase.update(newSalt)
    
   // await userDatabase.findByName('Ugurhan') BURASI PATLIYOR
    await productDatabase.findByName('Banana') //BURASI PATLAMIYOR
    

    */