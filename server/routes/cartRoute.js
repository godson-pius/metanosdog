const cartController = require('../controllers/cartController')
const router = require('express').Router()

router.get('/', cartController.getCarts)
router.post('/create', cartController.createCart)
router.get('/:userId', cartController.getUserCart)
router.delete('/remove/:cartId', cartController.removeCart)

module.exports = router