require("./mongo-connection");
const User = require("./models/user");
const Product = require("./models/product");
const Basket = require("./models/basket");
const Order = require("./models/order");

const { userService, productService } = require("./services/index");
const product = require("./models/product");

//const osman = User.create({name:'Osman',email:'osman@osman.com'})

//

//const bread = Product.create({name:'bread',description:'120g'})

async function main() {
  try {
    // const ugurhan = await User.create({name: 'Ugurhan',email:'ugurhan@gmail.com'})
    // const water = Product.create({name:'water',description:'1xbottle'})
    //await productService.insert(bread)
  } catch (e) {
    return console.log(e);
  }
}

main();
