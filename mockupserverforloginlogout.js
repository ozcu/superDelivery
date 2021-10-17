const fs = require('fs')
const jsonServer = require('json-server')
const jwt = require('jsonwebtoken')




const server = jsonServer.create()
const router =jsonServer.router('./db.json')


const userdb = JSON.parse(fs.readFileSync('./db.json','utf-8'))

server.use(jsonServer.defaults())
server.use(jsonServer.bodyParser)


const SECRET_KEY = '12345'
const expiresIn =1440

//Create a token from a payload
function createToken(payload){
    return jwt.sign(payload,SECRET_KEY,{expiresIn})
}


//verify the token
function verifyToken(token){

    return jwt.verify(token,SECRET_KEY,(err,decode)=>decode != undefined ? decode:err)
}

//check if the user exists in database
function isAuthenticated({email,password}){
    const usersChecked = userdb.users.findIndex(user=>user.email ===email && user.password ===password)  !== -1 
   console.log(usersChecked)
   return usersChecked
    
}
//check user and crate JWT
server.post('/auth/login',(req,res)=>{

    const {email,password} =req.body
    console.log({email,password})
    
    if(isAuthenticated({email,password})===false){
        const status =401
        const message ='Incorret email or password'
        res.status(status).json({status,message}) 
        return
    }
    else{
        const newUser = userdb.users.find(user =>user.email===email)
        const access_token = createToken({email,password})
        res.status(200).json({access_token:access_token,user:newUser})
        
    }
})

server.get('/users/:id', async (req, res) => {
    try {
      const user = userdb.users.findIndex(user=>user.id === req.params.id) 
      res.render(user)
    } catch (e) {
      return res.status(404).send('Cannot find user!')
    }
  })



server.use(/^(?!\/auth).*$/,  (req, res, next) => {
    if (req.headers.authorization === undefined || req.headers.authorization.split(' ')[0] !== 'Bearer') {
      const status = 401
      const message = 'Bad authorization header'
      res.status(status).json({status, message})
      return
    }
    try {
       verifyToken(req.headers.authorization.split(' ')[1])
       next()
    } catch (err) {
      const status = 401
      const message = 'Error: access_token is not valid'
      res.status(status).json({status, message})
    }
  })

  server.use(router)

server.listen(3000, () => {
  console.log('Run Auth API Server')
})

server.use('/api', router)