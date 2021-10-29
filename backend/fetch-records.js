require('./mongo-connection')

const Basket = require('./models/basket')
const Depot = require('./models/depot')
const Courier = require('./models/courier')
const Product = require('./models/product')

const {
    userService,
    productService,
    basketService,
    orderService,
    courierService,
    depotService,
} = require('./services/index')
const { activateOrder, finalizeOrder } = require('./services/order-service')
const {
    addCourierToDepot,

    removeCourierFromDepot,
} = require('./services/depot-service')

async function main() {
    try {
        /*   const product = await new Product({
            name: 'Water',
            description: 'Water Description',
            photo: 'water Photo',
            price: 15,
            category: 'Water Category',
        })

        productService.save(product) */
        /* const depot = await new Depot({
            name: 'Kucukyali Depot',
            addressCoordinates: [],
            couriers: [],
        })

        depotService.save(depot) */
        /* const courier = await new Courier({
            name: 'Ahmet',
            rating: 4,
        })

        courierService.save(courier) */
        /* depotService.addCourierToDepot(
            '617c4087eb1f95e208642d6e',
            '617c471fa635f682cf540a3e',
        ) */
        /*    removeCourierFromDepot(
            '617c4087eb1f95e208642d6e',
            '617c40d0f67de433a0f97ca8',
        ) */
        // const users = await userService.load()
        //const products = await productService.load()
        //basketService.save({ basketTotal: 0, products: [] })
        //const product = await productService.save({name:'TESTPRODUCT',price:159,description:'TESTDESC'})
        /*      await orderService.save({
            activeOrderTotal: 0,
            oldOrdersTotal: 0,
            numberofOldOrders: 0,
        }) */
        /*  await activateOrder(
            '617c3a43511602f057ccfdfc',
            '617c11b431da8230af061a75',
        ) */
        /*  finalizeOrder('617c3a43511602f057ccfdfc', '617c11b431da8230af061a75') */
        //const basket = await basketService.findbyId('617bdaf59d325fb0b6052939')
        //const product1 = await productService.find('617bb284be1a000055a19064')
        /*  basketService.removeProductFromBasket(
            '617c11b431da8230af061a75',
            '617c487634841cbabba83650',
        ) */
        /*  basketService.addProductToBasket(
            '617c11b431da8230af061a75',
            '617c487634841cbabba83650',
        ) */
        // basketService.emptyBasket('617c11b431da8230af061a75')
        /*   const basket = await new Basket({
            basketTotal: 0,
            products: [],
        })

        
        basketService.save(basket) */
        // console.log(product)
        // console.log(products)
        /*  const shirt = await productService.findBy('price', 187)

        console.log(shirt) */
    } catch (err) {
        throw new Error(`Error is : ${err}`)
    }
}
main()
