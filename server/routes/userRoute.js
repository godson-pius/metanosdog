const { handleRegistration, handleLogin }  = require('../controllers/userController')
const router = require('express').Router()

router.post('/register', handleRegistration)
router.post('/login', handleLogin)

module.exports = router