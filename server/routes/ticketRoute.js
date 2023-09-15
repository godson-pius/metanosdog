const { createTicket } = require('../controllers/TicketController')
const router = require('express').Router()

router.post('/create', createTicket)

module.exports = router