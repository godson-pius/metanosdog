const { handleRegistration, handleLogin, handleGetUsers, handleGetUser }  = require('../controllers/userController')
const router = require('express').Router()

router.get('/', handleGetUsers)
router.get('/getUser/:email', handleGetUser)
router.post('/register', handleRegistration)
router.post('/login', handleLogin)

module.exports = router