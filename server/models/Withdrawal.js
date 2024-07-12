const mongoose = require('mongoose');

const withdrawalSchema = new mongoose.Schema({
    
    user: { type: Object, required: [true, 'User details is required'] },
    amount: { type: Number, required: [true, 'Amount is required'] },
    walletaddress: { type: String, required: [true, 'Wallet Address is required'] },
    status: { type: String, default: 'pending' }

}, { timestamps: true });

const ForexWithdrawal = mongoose.model('ForexWithdrawal', withdrawalSchema);
module.exports = ForexWithdrawal;