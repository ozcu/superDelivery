const express = require('express')
const router = express.Router()
const jwt = require('jsonwebtoken')

router.post('/', async (req, res, next) => {
    const token = req.body
    console.log('request body ', token)
    console.log(token)
    //check JWT exists and verified
    if (token) {
        jwt.verify(token, process.env.JWTSECRETID, (err, decodedToken) => {
            if (err) {
                console.log(err.message)
                res.redirect('http://localhost:8080/login') //bodyden geri yolla redirect etme
            } else {
                console.log(decodedToken)
                next()
            }
        })
    } else {
        res.redirect('http://localhost:8080/login')
    }
})
