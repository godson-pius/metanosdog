const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
    user: {
        type: "String",
        required: true
    },

    productName: {
        type: "String",
        required: true,
        unique: true
    },

    productPrice: {
        type: "Number",
        required: true
    }
}, { timestamps: true });

const Cart = mongoose.model('Cart', cartSchema);
module.exports = Cart;