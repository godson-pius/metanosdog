const mongoose = require('mongoose')

const ReferralSchema = new mongoose.Schema({

    parent: {
        type: String,
        required: true
    },

    child: {
        type: String,
        required: true
    }

}, {timestamps: true})

const Referral = mongoose.model('Referral', ReferralSchema)
module.exports = Referral