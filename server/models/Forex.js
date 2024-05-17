const mongoose = require('mongoose');

const forexSchema = new mongoose.Schema({
    deposits: {
        type: [],
        required: true
    },

    withdrawals: {
        type: [],
        required: true
    },

    isDepositOpen: { type: 'boolean', default: true },
    
}, { timestamps: true });

const Forex = mongoose.model('Forex', forexSchema);
module.exports = Forex;