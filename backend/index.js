require('./mongo-connection')
require('dotenv').config()

const express = require('express')
const cors = require('cors')
const { requireAuth } = require('./auth/authMiddleware')
const authRoutes = require('./routes/authRoutes')

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors({ origin: true, credentials: true }))

app.set('view engine', 'pug')

const indexRouter = require('./routes/index')
const usersRouter = require('./routes/users') //register ile ortak post metodu var cıkarılabilir sonradan.
//const productsRouter = require('./routes/products')
const depotsRouter = require('./routes/depots')
const couriersRouter = require('./routes/couriers')
const basketsRouter = require('./routes/baskets')
const courierBookingRouter = require('./routes/courier-booking')
const ordersRouter = require('./routes/orders')

app.use('/', indexRouter)
app.use('/users', usersRouter)
app.use('/depots', depotsRouter)
app.use('/couriers', couriersRouter)
app.use('/baskets', basketsRouter)
app.use('/courier-booking', courierBookingRouter) //add remove olmamalı booking olmalı
app.use('/orders', ordersRouter)

app.use(authRoutes) //user login & register router controller
app.use('/auth', requireAuth) //user auth control middleware

const port = process.env.PORT || 3000

app.listen(port, () => {
    console.log(`server started listening on port:${port}`)
})
