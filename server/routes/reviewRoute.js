const {addReview, getReviews} = require('../controllers/ReviewController')
const router = require('express').Router()

router.get('/:productId', getReviews)
router.post('/create', addReview)

module.exports = router