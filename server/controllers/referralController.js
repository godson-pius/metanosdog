const Referral  = require('../models/Referrals')

exports.insertRef = async(req, res) => {
    try {
        const data = req.body;
        const referral = await Referral.create(data)

        res.status(200).json({referral, status: 'success'})
    } catch (e) {
        res.status(500).json({e})
    }
}