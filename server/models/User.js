const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: true,
    },

    lastname: {
        type: String,
        required: true,
    },

    email: {
        type: String,
        required: true,
        unique: true,
    },

    password: {
        type: String,
        required: true,
    },

    shippingAddress: {
        type: String,
        required: true,
    },

    balance: { 
        type: [], 
        default: [{ metanosdog: 0, forex: 0, roi: 0, deposit: 0, withdrawal: 0, refProfit: 0}]
    },

    transactions: {
        type: [],
        default: []
    },

    pic: {
        type: String,
        default: 'pic'
    },

    role: {type: String, default: "user"}
}, { timestamps: true })

const User = mongoose.model('User', userSchema)
module.exports = User