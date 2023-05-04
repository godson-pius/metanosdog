const mongoose = require('mongoose');

const ReviewSchema = new mongoose.Schema({

    productId: {
        type: 'String',
        required: true
    },

    user: {
        type: "String",
        required: true
    },

    review: {
        type: 'String',
        required: true
    },

    rate: {
        type: 'String',
        required: true
    }

}, { timestamps: true})

const Review = mongoose.model('Review', ReviewSchema)
module.exports = Review