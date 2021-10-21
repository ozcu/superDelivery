require('./mongo-connection')
const express = require('express')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const { requireAuth } = require('./middleware/authMiddleware')

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors({ origin: true, credentials: true })) //axios ile cookie için gerekli diye ekledim ama emin degilim.
app.use(cookieParser())

app.set('view engine', 'pug')

const indexRouter = require('./routes/index')
const usersRouter = require('./routes/users') //register ile ortak post metodu var cıkarılabilir sonradan.
const productsRouter = require('./routes/products')
const depotsRouter = require('./routes/depots')
const couriersRouter = require('./routes/couriers')
const basketsRouter = require('./routes/baskets')
const courierBookingRouter = require('./routes/courier-booking')
const ordersRouter = require('./routes/orders')

const loginRouter = require('./routes/login')
const registerRouter = require('./routes/register')

app.use('/', indexRouter)
app.use('/users', usersRouter)
app.use('/depots', depotsRouter)
app.use('/couriers', couriersRouter)
app.use('/baskets', basketsRouter)
app.use('/courier-booking', courierBookingRouter) //add remove olmamalı booking olmalı
app.use('/orders', ordersRouter)

app.use('/register', registerRouter)
app.use('/login', loginRouter)

app.use('/products', requireAuth, productsRouter)

app.listen(3000, () => {
    console.log('server started listening port on 3000')
})
