const express = require('express')
const router = express.Router()
const bcrypt = require('bcrypt')
const userService = require('../services/user-service')
const sgMail = require('@sendgrid/mail')
require('dotenv').config()

sgMail.setApiKey(process.env.SENDGRID_API) //dotenv didnt worked hardcoded works.

//password is hashed and not retainable need to add a new link in email that will forward to change password
router.post('/', async (req, res) => {
    try {
        const { email } = req.body

        const user = await userService.findByEmail(email)

        console.log(user[0].password)

        if (user !== null || user !== undefined) {
            sgMail
                .send({
                    to: email,
                    from: 'ugurhan.buyukozcu@gmail.com',
                    subject: 'Forgot Password',
                    text: `Dear user, your password is ${user[0].password}`,
                })
                .then(() => {
                    console.log('email sent')
                })
                .catch((error) => {
                    console.error(error)
                })
        }
    } catch (err) {
        throw new Error(`Error is ${err}`)
    }
})

module.exports = router
