const mongoose = require('mongoose');

const basePrice = mongoose.Schema({

    price: { type: Number, required: ['Base Price is required'] }

}, {timestamps: true})

const BasePrice = mongoose.model('BasePrice', basePrice);
module.exports = BasePrice;