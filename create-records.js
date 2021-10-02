const User = require('./models/user')
const Product =require('./models/product')
const {userDatabase, productDatabase} = require('./database/index')





const ugurhan = new User('Ugurhan','asd@gmail.com','+90555555555','Bostancı mh',[40.955,29.104],'55555555555555551023111')
const banana = new Product(undefined,'Banana','bananaPhoto','250g', 2.5, 'Fruit',false)
const bread = new Product(undefined,'Bread','breadPhoto','1xBread 120g', 1.5, 'Baked Product(s)', false)
const water = new Product(undefined,'Water','waterPhoto','1xBottle', 1.0, 'Water', false)

const user1 = User.create({name:'Sinan',email:'sdf@sdft.com'})


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