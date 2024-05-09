const orderController = require('../controllers/orderController')
const router = require('express').Router()

router.get('/', orderController.getOrders)
router.post('/create', orderController.createOrder)
router.get('/:userId', orderController.getUserOrder)
router.put('/cancel/:orderId', orderController.cancelOrder)
router.put('/success/:orderId', orderController.orderSuccessful)
router.delete('/delete/:orderId', orderController.removeOrder)

module.exports = router