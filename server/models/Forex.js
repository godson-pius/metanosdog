const mongoose = require('mongoose');

const forexSchema = new mongoose.Schema({
    
    isDepositOpen: { type: 'boolean', default: true },
    
}, { timestamps: true });

const Forex = mongoose.model('Forex', forexSchema);
module.exports = Forex;