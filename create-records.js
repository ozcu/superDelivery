require('./mongo-connection')

const {
  userService,
  productService,
  basketService,
} = require('./services/index')

async function main() {
  try {
    productBread = await productService.findByName('Bread')
    productWater = await productService.findByName('Water')

    userOsman = await userService.findByName('Osman')
    console.log(userOsman)

    const newBasket = await basketService.addProductToBasket(productBread)
    userOsman.basket = newBasket
    console.log(userOsman)

    //user.basket.products undefined
    //user.Basket.products -> [[{product}]] neden böyle oturtamadım. servisleri hatalı mı ayırıyorum acaba
    //add product methodu user'a mı ait olmalı basket yerine?

    // console.log(Basket)
    //console.log(testProduct)
  } catch (e) {
    return console.log(e)
  }
}

main()
