require('./mongo-connection')
const product = require('./models/product')
const User = require('./models/user')

const {
  userService,
  productService,
  orderService,
  basketService,
} = require('./services/index')

async function main() {
  try {
    /*   const ugurhan = new User({
      name: 'Ugurhan',
      email: 'asd@gmail.com',
      telephone: '+90555555555',
      address: 'Bostancı mh',
      addressGeolocation: [40.955, 29.104],
      creditCardInfo: '55555555555555551023111',
      basket: { products: [], basketTotal: 0 },
      order: {
        activeOrderTotal: 0,
        numberOfOrders: 0,
        oldOrderTotal: 0,
      },
    })

    userService.save(ugurhan) */

    /*   const Banana = new product({
      name: 'Banana',
      photo: 'bananaPhoto',
      description: '1x Banana',
      price: 1.5,
      category: 'Fruits',
    })
    console.log(Banana.price)
    productService.save(Banana)

   */
    const [productBanana] = await productService.findByName('Banana')

    /* basketService.removeProductFromBasket(
      '615cae4513f9db532a0f66fd',
      productBanana,
    ) */

    /* await basketService.addProductToBasket(
      '615cb1eff4ef34013df63463',
      productBanana,
    ) */

    //await basketService.emptyUserBasket('615cb1eff4ef34013df63463')

    //await orderService.activateOrder('615cb1eff4ef34013df63463')
    await orderService.finalizeOrder('615cb1eff4ef34013df63463')
  } catch (e) {
    return console.log(e)
  }
}

main()
