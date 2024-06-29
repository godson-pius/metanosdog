const forexController = require('../controllers/forexController')
const router = require('express').Router()

router.get('/', forexController.getTransactions)
router.put('/deposit', forexController.handleDeposit)
router.put('/withdraw', forexController.handleWithdrawal)
router.post('/confirmdeposit', forexController.handleConfirmDeposit)
router.get('/checkmax', forexController.checkMaxDeposit)
router.get('/checkdepositstatus', forexController.checkDepositStatus)
router.get('/opendeposit', forexController.openDeposit)
router.get('/closedeposit', forexController.closeDeposit)
router.get('/getprofit/:userId/:role', forexController.getRefProfit)
// router.delete('/remove/:cartId', cartController.removeCart)
// router.delete('/clearUserCart/:userId', cartController.clearUserCart)

module.exports = router