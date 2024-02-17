const mongoose = require('mongoose');

const vendorSchema = new mongoose.Schema({

    shopName: { type: String, unique: true, required: true },

    shopType: { type: String, required: true },
    
    managerFullname: { type: String, required: true },

    managerPhone: { type: String, required: true }, 

    balance: { type: Number, default: 0 }, 

    additionalPhone: { type: String, required: true },
    
    emailAddress: { type: String,  unique: true, required: true },

    refId: { type: String, required: true },

    parentId: { type: String, default: null },

    children: { type: Array, default: [] },

    generation: { type: Array, default: [] },

    password: { type: String, required: true },

}, { timestamps: true });

const Vendor = mongoose.model('Vendor', vendorSchema)
module.exports = Vendor;