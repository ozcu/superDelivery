require('./mongo-connection')

const express = require('express')
//const bodyParser = require('body-parser') //deprecated express içine dahil oldu sanırım bir test edip kaldır

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

app.use('/', indexRouter)
app.use('/users', usersRouter)
app.use('/products', productsRouter)
app.use('/depots', depotsRouter)
app.use('/couriers', couriersRouter)
app.use('/baskets', basketsRouter)

app.listen(3000, () => {
  console.log('started listening')
})
