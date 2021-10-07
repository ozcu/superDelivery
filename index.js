require('./mongo-connection')

const express = require('express')

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.set('view engine', 'pug')

const indexRouter = require('./routes/index')
const usersRouter = require('./routes/users')
const productsRouter = require('./routes/products')
const depotsRouter = require('./routes/depots')
const couriersRouter = require('./routes/couriers')
const basketsRouter = require('./routes/baskets')
const courierBookingRouter = require('./routes/courier-booking')
const ordersRouter = require('./routes/orders')

app.use('/', indexRouter)
app.use('/users', usersRouter)
app.use('/products', productsRouter)
app.use('/depots', depotsRouter)
app.use('/couriers', couriersRouter)
app.use('/baskets', basketsRouter)
app.use('/courier-booking', courierBookingRouter)
app.use('/orders', ordersRouter)

app.listen(3000, () => {
  console.log('started listening')
})
