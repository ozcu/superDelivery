const mongoose = require('mongoose')

const dbURI2 = 'mongodb://localhost/GetirClone'

//connect to mongodb
const dbURI =
  'mongodb+srv://Admin:admin1234@cluster0.tw5yi.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
mongoose.connect(dbURI2, { useNewUrlParser: true, useUnifiedTopology: true })

var db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', function () {
  console.log('we are connected to mongodb!')
})