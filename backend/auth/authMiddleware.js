const jwt = require('jsonwebtoken')
const { userService } = require('../services')

const requireAuth = (req, res, next) => {
    const token = req.body.token

    //check JWT exists and verified
    if (token) {
        jwt.verify(
            token,
            process.env.JWTSECRETID,
            async (err, decodedToken) => {
                if (err) {
                    const error = err.message
                    return res.json({ error }).status(400)
                } else {
                    const user = await userService.find(decodedToken.id)
                    if (user !== null) {
                        res.send('User found').status(200)
                        next()
                    } else {
                        res.send('User not found').status(404)
                    }
                }
            },
        )
    } else {
        res.json({ err }).status(400)
        console.log(err.message)
    }
}

module.exports = { requireAuth }
