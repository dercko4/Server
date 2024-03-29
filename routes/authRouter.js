const Router = require('express')
const router = new Router()
const authController = require('../controlles/authController')

router.post('/registration', authController.registration)
router.post('/login', authController.login)

module.exports = router