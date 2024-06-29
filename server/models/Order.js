const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    user: {
        type: Object,
        required: true
    },

    userId: {
        type: String,
        required: true
    },

    products: {
        type: [],
        required: true
    },

    shippingAddress: {type: "String"},

    dispatched: {
        type: "String",
        required: true,
        default: "pending"
    }

}, { timestamps: true });

const Order = mongoose.model('Order', orderSchema);
module.exports = Order;