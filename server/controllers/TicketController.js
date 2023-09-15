const Ticket = require('../models/Ticket')

exports.createTicket = async(req, res) => {
    try {
        const ticket = await Ticket.create(req.body)
        res.status(200).json({ticket, status: "success"})
    } catch (error) {
        res.status(500).json({ error })
    }
}