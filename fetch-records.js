require('./mongo-connection')

const {
  userService,
  productService,
  depotService,
} = require('./services/index')

async function main() {
  const couriers = await courierService.load()
  const users = await userService.load()
  const products = await productService.load()

  const productBread = await productService.findByName('Bread')
  const productWater = await productService.findByName('Water')

  const test = await courierService.findByDepotAddress('Kucukyali Depot')
  console.log(test)
}
main()
