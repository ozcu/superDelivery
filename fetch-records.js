require('./mongo-connection')

const {
  userService,
  productService,
  courierService,
} = require('./services/index')

async function main() {
  const couriers = await courierService.load()
  const users = await userService.load()
  const products = await productService.load()

  const test = await courierService.findByDepotAddress('Kucukyali Depot')
  console.log(test)
}
main()
