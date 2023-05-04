const mongoose = require('mongoose');

const vendorSchema = new mongoose.Schema({

    shopName: { type: String, unique: true, required: true },

    shopType: { type: String, required: true },
    
    managerFullname: { type: String, required: true },

    managerPhone: { type: String, required: true }, 

    additionalPhone: { type: String, required: true },
    
    emailAddress: { type: String,  unique: true, required: true },

    password: { type: String, required: true },

}, { timestamps: true });

const Vendor = mongoose.model('Vendor', vendorSchema)
module.exports = Vendor;