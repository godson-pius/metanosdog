const mongoose = require('mongoose');

const TicketSchema = new mongoose.Schema({
    sender: {
        type: "String",
        required: true
    },

    emailAddress: {
        type: "String",
        required: true
    },

    phoneNumber: {
        type: "String",
        required: true
    },

    subject: {
        type: "String",
        required: true
    },

    status: {
        type: "String",
        required: true
    },

    message: {
        type: "String",
        required: true
    },


}, { timestamps: true });

const Ticket = mongoose.model('Ticket', TicketSchema)
module.exports = Ticket 