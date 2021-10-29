const userService = require('./user-service')
const productService = require('./product-service')
const orderService = require('./order-service')
const depotService = require('./depot-service')
const basketService = require('./basket-service')
const courierService = require('./courier-service')
const courierBookingService = require('./courier-booking-service')

module.exports = {
    userService,
    productService,
    orderService,
    depotService,
    basketService,
    courierService,
    courierBookingService,
}
