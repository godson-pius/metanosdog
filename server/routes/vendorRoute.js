const { handleRegistration, handleLogin, handleUpdateVendor } = require('../controllers/vendorController')
const router = require('express').Router()

router.post('/register', handleRegistration)
router.post('/login', handleLogin)
router.patch('/update/:id', handleUpdateVendor)

module.exports = router