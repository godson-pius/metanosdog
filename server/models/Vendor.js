const mongoose = require('mongoose');

const vendorSchema = new mongoose.Schema({

    shopName: { type: String, unique: true, required: true },

    shopType: { type: String, required: true },
    
    managerFullname: { type: String, required: true },

    managerPhone: { type: String, required: true }, 

    balance: { type: Number, default: 0 }, 

    forexBalance: { 
        type: [], 
        default: [{ metanosdog: 0, forex: 0, roi: 0, deposit: 0, withdrawal: 0, refProfit: 0}]
    },

    transactions: {
        type: [],
        default: []
    },

    additionalPhone: { type: String, required: true },
    
    emailAddress: { type: String,  unique: true, required: true },

    refId: { type: String, required: true },

    parentId: { type: String, default: null },

    children: { type: Array, default: [] },

    generation: { type: Array, default: [] },

    password: { type: String, required: true },

    role: {type: String, default: "vendor"},

    active: { type: Boolean, default: false}

}, { timestamps: true });

const Vendor = mongoose.model('Vendor', vendorSchema)
module.exports = Vendor;