require('./mongo-connection')
const product = require('./models/product')
const User = require('./models/user')
const Depot = require('./models/depot')
const Courier = require('./models/courier')
const courierService = require('./services/courier-service')
const basketService = require('./services/basket-service')
const productService = require('./services/product-service')
const userService = require('./services/user-service')
const depotService = require('./services/depot-service')
const orderService = require('./services/order-service')
const courierBookingService = require('./services/courier-booking-service')

/* const {
  userService,
  productService,
  orderService,
  basketService,
} = require('./services/index') */

async function main() {
    try {
        /*   const tugberk = new User({
            name: 'tugberk',
            password: 'qwe123qwe123',
            email: 'asd@gmail.com',
            telephone: '+44',
            address: 'test mh',
            addressGeolocation: [40.905, 29.104],
            creditCardInfo: '555555',
            basket: { products: [], basketTotal: 0 },
            order: {
                activeOrderTotal: 0,
                numberOfOrders: 0,
                oldOrderTotal: 0,
            },
        })
        userService.save(tugberk) */
        /* const bostanciDepot = new Depot({
      name: 'Bostancı Depot',
      address:
        '1 d, 5, Bostancı Mah. Eminalipaşa Cad. No:72, 34744 Kadıköy/İstanbul',
      geolocation: [40.959, 29.091],
      personnel: [],
    })

    depotService.save(bostanciDepot) */
        /*  const courierAhmet = new Courier({
      courierName: 'Ahmet',
      rating: 2.5,
    })
    const courierMehmet = new Courier({
      courierName: 'Mehmet',
      rating: 3.4,
    })

    courierService.save(courierAhmet)
    courierService.save(courierMehmet) */
        /* const Banana = new product({
      name: 'Banana',
      photo: 'bananaPhoto',
      description: '1x Banana',
      price: 1.5,
      category: 'Fruits',
    })


   
    /*  basketService.removeProductFromBasket(
      '615dba0897e673774db88e8b',
      '615dba80444e59a99c646bf0',
    ) */
        //await basketService.emptyUserBasket('615dba0897e673774db88e8b')
        //await orderService.activateOrder('615dba0897e673774db88e8b')
        //await orderService.finalizeOrder('615dba0897e673774db88e8b')
        /*   await courierBookingService.addCourierToDepot(
      '615dc113f2a64027528f077c',
      '615dc283d8ff7a0b05c577a8',
    )
 */
        /*  await courierBookingService.removeCourierFromDepot(
      '615dba6c91a8a7bf66d87b45',
      '615dc283d8ff7a0b05c577a8',
    ) */
        /*  await basketService.addProductToBasket(
      '615ee811cc0c7c8ffea7cbc7',
      '615dffd94ecfa7a3ee246df0',
    )  */
    } catch (e) {
        return console.log(e)
    }
}

main()
