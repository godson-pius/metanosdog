const router = require('express').Router()
const { calculateDateDifference } = require("../utils/helper");
const Deposit = require("../models/Deposit");
const User = require("../models/User");
const Vendor = require('../models/Vendor');

router.get('/', async (_, res) => {
    // FETCH ALL ACTIVE DEPOSIT 
    const deposits = await Deposit.find({
        has_expired: false,
        status: 'success'
    })

    console.log("DEPOSITS => ", deposits)

    // LOOP THROUGH ALL DEPOSIT
    for (const deposit of deposits) {

        // CHECK IF IT'S UP TO A WEEK YET
        const { isAWeek, monthsDifference } = calculateDateDifference(new Date(deposit.date_deposited))
        if (isAWeek) {
            const profix = (deposit.amount * 2) / 100

            console.log("PROFIT:", profix)

            // CREDIT WALLET
            if(deposit.user.role === 'vendor') {
                const vendor = await Vendor.findOne({ _id: deposit.user._id })
                console.log("USER:", vendor)
                if (!vendor) continue;

                console.log("USER := ", vendor)
                console.log("DEPOSIT := ", deposit)

                const wallets = [...vendor.forexBalance] // ARRAY
                wallets[0]['forex'] = (wallets[0]['forex'] ?? 0) + profix

                // UPDATE USER
                console.log("WALLET:", wallets)    
                await Vendor.updateOne({ _id: deposit.user._id  }, {
                    forexBalance: wallets
                })
            }

            if(deposit.user.role === 'user') {
                const user = await User.findOne({ _id: deposit.user._id })
                console.log("USER:", user)
                if (!user) continue;
    
                console.log("USER := ", user)
                console.log("DEPOSIT := ", deposit)
    
                const wallets = [...user.balance] // ARRAY
                wallets[0]['forex'] = (wallets[0]['forex'] ?? 0) + profix

                await User.updateOne({ _id: deposit.user._id  }, {
                    balance: wallets
                })

            }

            // UPDATE DEPOSIT
            deposit.date_deposited = new Date()
            await deposit.save()
        }

        // CHECK IF IT'S UP TO 8 MONTHS
        if (monthsDifference >= 8) {
            // UPDATE DEPOSIT
            deposit.has_expired = true
            await deposit.save()
        }

    }
    return res.send(deposits)
})

module.exports = router