const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    vendorId: {
        type: String,
        required: true
    },
    
    productName: {
        type: String,
        required: true
    },

    productSlug: {
        type: String,
        required: true
    },

    productPrice: {
        type: Number,
        required: true
    },

    productCat: {
        type: String,
        required: true
    },

    productImage: {
        type: String,
        required: true
    },

    productDesc: {
        type: String,
        required: true
    }    
}, { timestamps: true })

const Product = mongoose.model('Product', productSchema)
module.exports = Product