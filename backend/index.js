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
const productsRouter = require('./routes/products')
const depotsRouter = require('./routes/depots')
const couriersRouter = require('./routes/couriers')
const basketsRouter = require('./routes/baskets')
const courierBookingRouter = require('./routes/courier-booking')
const ordersRouter = require('./routes/orders')
const forgotPasswordRouter = require('./routes/forgotPassword')
const uploadFileRouter = require('./routes/uploadFile')

app.use('/', indexRouter)
app.use('/users', usersRouter)
app.use('/depots', depotsRouter)
app.use('/couriers', couriersRouter)
app.use('/baskets', basketsRouter)
app.use('/courier-booking', courierBookingRouter) //add remove olmamalı booking olmalı
app.use('/orders', ordersRouter)
app.use('/products', productsRouter)
app.use('/forgot-password', forgotPasswordRouter)
app.use('/upload-file', uploadFileRouter)

app.use(authRoutes) //user login & register router controller
app.use('/auth', requireAuth) //check if bearer token is available and valid

const port = 3000 || process.env.BACKEND_BASE_PORT //build fail oldu buraya bakmam gerekiyor aralarında konusmuyorlar default 8080 yüzünden.

app.listen(port, () => {
    console.log(`server started listening on port:${port}`)
})
