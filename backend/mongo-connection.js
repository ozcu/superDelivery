const mongoose = require('mongoose')
require('dotenv').config()

const dbLocal = process.env.MONGOLOCAL
const dbCloud = process.env.MONGOCLOUD

dbConn = dbLocal || dbCloud

const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}

mongoose.connect(dbConn, options)

var db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', function () {
    console.log(`we are connected to mongodb on : ${dbConn}`)
})
