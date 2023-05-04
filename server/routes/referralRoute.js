const referralController = require('../controllers/referralController')
const router = require('express').Router()

router.post('/', referralController.insertRef)

module.exports = router