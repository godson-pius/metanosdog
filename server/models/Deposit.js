const mongoose = require('mongoose');

const depositSchema = new mongoose.Schema({

    user: { type: Object, required: [true, 'User details is required'] },
    txnId: { type: String, required: [true, 'Transaction id is required'] },
    amount: { type: Number, required: [true, 'Amount is required'] },
    methodofpayment: { type: String, required: [true, 'Method of payment is required'] },
    plan: { type: String, required: [true, 'Plan is required'] },
    pop: { type: String, required: [true, 'Proof of payment is required'] },
    role: { type: String, required: [true, 'Role is required'] },
    status: { type: String, default: 'pending' }

}, { timestamps: true });

const ForexDeposit = mongoose.model('ForexDeposit', depositSchema);
module.exports = ForexDeposit;