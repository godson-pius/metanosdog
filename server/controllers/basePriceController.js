const BasePrice = require("../models/BasePrice");

exports.updateBasePrice = async(req, res) => {
    try {
        const price = await BasePrice.findByIdAndUpdate();
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}   