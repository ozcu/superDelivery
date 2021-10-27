const jwt = require('jsonwebtoken')
//const { userService } = require('../services')

function verifyToken(token) {
    return jwt.verify(token, process.env.JWTSECRETID, (err, decodedToken) =>
        decodedToken != undefined ? decodedToken : err,
    )
}
//comes null in second enter not handled. Also check password is filled after first login also check why store states becomes null
const requireAuth = (req, res, next) => {
    try {
        console.log(req.headers.authorization)
        if (
            req.headers.authorization === undefined ||
            req.headers.authorization.split(' ')[0] !== 'Bearer '
        ) {
            const status = 401
            const message = 'Bad authorization header'
            res.json({ status, message }).status(status)
            return
        } else {
            const verifiedUser = verifyToken(
                req.headers.authorization.split(' ')[1],
            )

            console.log(verifiedUser)
            res.json({ id }).status(200)
            next()
        }
    } catch (err) {
        const status = 401
        const message = 'Error: JWT is not valid'
        res.json({ status, message }).status(status)
    }
}

/* //post token to validate
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
} */

module.exports = { requireAuth }
