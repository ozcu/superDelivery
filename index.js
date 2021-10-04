require('./mongo-connection')

const express = require ('express')
const bodyParser = require('body-parser')

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))


app.set('view engine','pug')

const indexRouter = require('./routes/index')
const usersRouter = require('./routes/users')
const productsRouter = require('./routes/products')



app.use('/users',usersRouter)
app.use('/', indexRouter)
app.use('/products',productsRouter)



app.listen(3000,()=>{

console.log('started listening')

})