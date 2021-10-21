const jwt = require('jsonwebtoken')

const requireAuth = (req, res, next) => {
    const token = req.cookies.jwt

    //check JWT exists and verified
    if (token) {
        jwt.verify(token, 'secretid', (err, decodedToken) => {
            if (err) {
                console.log(err.message)
                res.redirect('/login')
            } else {
                console.log(decodedToken)
                next()
            }
        })
    } else {
        res.redirect('http://localhost:8080/login')
    }
}

module.exports = { requireAuth }
