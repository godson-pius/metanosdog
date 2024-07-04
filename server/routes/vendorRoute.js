const { handleRegistration, handleLogin, handleUpdateVendor, activateAccount, handleGetUser } = require('../controllers/vendorController')
const router = require('express').Router()

router.post('/register', handleRegistration)
router.post('/login', handleLogin)
router.get('/getUser/:email', handleGetUser)
router.patch('/update/:id', handleUpdateVendor)
router.patch('/activate/:id/:method/:amount', activateAccount)

module.exports = router