const express = require('express')
const router = express.Router()
const { userService } = require('../services')

router.get('/', async (req, res) => {
  try {
    const users = await userService.load()
    res.render('users', { users: users })
  } catch (e) {
    throw new Error('User Database cannot be loaded!')
  }
})

router.get('/:userId', async (req, res) => {
  try {
    const user = await userService.find(req.params.userId)
    res.render('user', { user: user })
  } catch (e) {
    return res.status(404).send('Cannot find user!')
  }
})

router.post('/', async (req, res) => {
  await userService.insert(req.body)
  res.send(req.body)
})

router.delete('/:userId', async (req, res) => {
  await userService.removeBy('id', req.params.userId)
  res.send('OK')
})

router.patch('/:userId', async (req, res) => {
  const { userId } = req.params.userId
  const { name } = req.body

  await userService.update(userId, { name })
  //Does patch only works with one property?
})

module.exports = router
