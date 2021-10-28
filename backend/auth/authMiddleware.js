const jwt = require('jsonwebtoken')
const { userService } = require('../services')

//check berarer is valid, token is valid and registered with a user
const requireAuth = (req, res, next) => {
    try {
        if (
            req.headers.authorization === undefined ||
            req.headers.authorization.split(' ')[0] !== 'Bearer'
        ) {
            const status = 401
            const message = 'Bad authorization header'
            res.json({ status, message }).status(status)
            return
        } else {
            const token = req.headers.authorization.split(' ')[1]
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
                            const userId = decodedToken.id
                            res.json({ userId }).status(200)
                            next()
                        } else {
                            const error = ' User not found!'
                            res.json({ error }).status(400)
                            return
                        }
                    }
                },
            )
        }
    } catch (err) {
        const status = 401
        const message = 'Error: JWT is not valid'
        res.json({ status, message }).status(status)
    }
}

module.exports = { requireAuth }
