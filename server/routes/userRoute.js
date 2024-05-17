const { handleRegistration, handleLogin, handleGetUsers }  = require('../controllers/userController')
const router = require('express').Router()

router.get('/', handleGetUsers)
router.post('/register', handleRegistration)
router.post('/login', handleLogin)

module.exports = router