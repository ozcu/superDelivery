const express = require ('express')
const {userDatabase, productDatabase} = require('./database/index')
const User = require('./models/user')
const app = express()

require('./mongo-connection')
app.use(express.json())

app.set('view engine','pug')

app.post('/users', async (req,res)=> {

  const  users = User.create(req.body)
  await userDatabase.save(users) // load calısınca burası insert olacak
 res.send(userDatabase)
 
})


app.get('/users', async (req,res)=>{
   // const users = await userDatabase.load()
     
  
 
 
   // res.send(JSON.stringify(users,null,2))
  // res.render('users', {users})
  // console.log(users.length)
 })



app.get('/',(req,res)=>{

    res.render('index')
})




app.listen(3000,()=>{

console.log('started listening')

})