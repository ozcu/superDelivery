require('./mongo-connection')
const User = require('./models/user')
const Product = require('./models/product')
const Basket = require('./models/basket')
const Order = require('./models/order')

const {
  userService,
  productService,
  courierService,
} = require('./services/index')
const courier = require('./models/courier')

async function main() {
  const couriers = await courierService.load()
  const users = await userService.load()
  const products = await productService.load()

  const test = await courierService.findByDepotAddress('Kucukyali Depot')
  console.log(test)
}
main()
