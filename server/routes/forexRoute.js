const forexController = require('../controllers/forexController')
const router = require('express').Router()

router.get('/', forexController.getTransactions)
router.put('/deposit', forexController.handleDeposit)
router.post('/user/deposit', forexController.handleConfirmDeposit)
router.get('/checkmax', forexController.checkMaxDeposit)
router.get('/checkdepositstatus', forexController.checkDepositStatus)
// router.get('/:userId', cartController.getUserCart)
// router.delete('/remove/:cartId', cartController.removeCart)
// router.delete('/clearUserCart/:userId', cartController.clearUserCart)

module.exports = router