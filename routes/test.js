const express = require('express')
const router = express.Router()

router.get('/', async (req, res) => {
    try {
        res.render('test')
    } catch (e) {
        throw new Error('test cannot be loaded!')
    }
})
