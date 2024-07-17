const Forex = require("../models/Forex");
const User = require("../models/User");
const Vendor = require("../models/Vendor");
const { closeDepositAmount, forexTableId } = require("../utils/controlVal");
const { calculateRefProfit } = require("../utils/refProfit");
const { rewardUpliners } = require("../utils/rewardUpliners");
const { startScheduleForUsers, startScheduleForVendors } = require("../utils/scheduler");
const cloudinary = require("../utils/cloudinary");
const ForexDeposit = require("../models/Deposit");
const ForexWithdrawal = require("../models/Withdrawal");

exports.getTransactions = async (req, res) => {
    try {
        const deposits = await ForexDeposit.find({})
        const withdrawals = await ForexWithdrawal.find({})
        res.status(200).json({ deposits, withdrawals, status: "success" })
    } catch (error) {
        res.status(500).json({ error })
    }
}

exports.getRefProfit = async (req, res) => {
    try {
        const { userId, role } = req.params;
        let profit = 0;

        if (role == "user") {
            // do something with the user
            const user = await User.findById(userId);
            profit = await calculateRefProfit(user, 'user')

        } else {
            // do something with vendor
            const vendor = await Vendor.findById(userId)
            profit = await calculateRefProfit(vendor, 'vendor')
        }

        res.status(200).json({ profit, status: 'success' })
    } catch (error) {
        res.status(500).json({ error })
    }
}

exports.handleDeposit = async (req, res) => {
    try {
        const data = req.body;
        data['pop'] = (await cloudinary.uploader.upload(data.pop, { upload_preset: "metanosdog" })).secure_url
        let totalDeposits = 0;

        const deposits = await ForexDeposit.find()
        deposits.forEach((deposit) => {
            totalDeposits += deposit.amount
        })

        if (totalDeposits < closeDepositAmount) {
            const addedDeposit = await ForexDeposit.create(data);
            res.status(200).json({ addedDeposit, status: "success" })
        } else {
            res.status(200).json({ message: "Deposit Closed", status: "failed" })
        }
    } catch (error) {
        res.status(500).json({ error })
    }

}

exports.handleWithdrawal = async (req, res) => {
    try {
        const data = req.body;
        const user = data.user
        const userDetails = user.role == "user" ? await User.findById(user._id) : await Vendor.findById(user._id)

        if (userDetails.role == "user") {
            if (userDetails.balance[0].roi >= 10) {
                const withdrawal = await ForexWithdrawal.create(data);

                const balance = userDetails.balance;
                balance[0].roi -= data.amount;

                await User.findByIdAndUpdate(userDetails._id, { $set: { balance: balance } }, { new: true });
                res.status(200).json({ withdrawal, status: "success" })
            } else {
                res.status(200).json({ message: "Balance too low for withdrawal!", status: "failed" })
            }
        } else {
            if (userDetails.forexBalance[0].roi >= 10) {
                const withdrawal = await ForexWithdrawal.create(data);

                const balance = userDetails.forexBalance;
                balance[0].roi -= data.amount;
                await Vendor.findByIdAndUpdate(userDetails._id, { $set: { forexBalance: balance } }, { new: true });

                res.status(200).json({ withdrawal, status: "success" })
            } else {
                res.status(200).json({ message: "Balance too low for withdrawal!", status: "failed" })
            }
        }

    } catch (error) {
        res.status(500).json({ error })
    }

}

exports.handleConfirmDeposit = async (req, res) => {
    const data = req.body;
    try {
        if (data.role == "user") {
            const user = await User.findById(data.id)
            if (user) {
                const currentBal = user.balance;
                currentBal[0].deposit += data.amount

                // Update the deposit status
                updateTransactionStatus(data.txnId);

                //Reward upliner
                rewardUpliners(user.parentId, data.amount)

                const deposit = await User.findByIdAndUpdate(data.id, { $set: { balance: currentBal } }, { new: true });

                // Start CRON job for users
                startScheduleForUsers(data)

                res.status(200).json({ deposit, status: "success" })
            }
        } else if (data.role == "vendor") {
            const user = await Vendor.findById(data.id)
            const currentBal = user.forexBalance;
            currentBal[0].deposit += data.amount

            // Update the deposit status
            updateTransactionStatus(data.txnId);

            //Reward upliner
            if (user.parentId !== null) {
                rewardUpliners(user.parentId, data.amount)
            }

            const deposit = await Vendor.findByIdAndUpdate(data.id, { $set: { forexBalance: currentBal } }, { new: true });

            // Start CRON job for vendors
            startScheduleForVendors(data)

            res.status(200).json({ deposit, status: "success" })
        }

    } catch (error) {
        res.status(500).json({ error })
    }

}

exports.handleConfirmWithdrawal = async (req, res) => {
    const data = req.body;
    try {

        const confirmed = await ForexWithdrawal.findByIdAndUpdate(data.wId, { $set: { status: "success" } }, { new: true });
        res.status(200).json({ confirmed, status: "success" })

    } catch (error) {
        res.status(500).json({ error })
    }

}

exports.checkMaxDeposit = async (req, res) => {
    try {
        let totalDeposits = 0;

        const deposits = await ForexDeposit.find({})
        console.log(deposits)

        deposits.forEach((deposit) => {
            totalDeposits += deposit.amount
        })

        if (totalDeposits < closeDepositAmount) {
            res.status(200).json({ message: "false", status: "success" })
        } else {
            res.status(200).json({ message: "true", status: "success" })
        }
    } catch (error) {
        res.status(500).json({ erroro: error })
    }
}

exports.openDeposit = async (req, res) => {
    try {
        const deposit = await Forex.findByIdAndUpdate(forexTableId, { $set: { isDepositOpen: true } }, { new: true });
        res.status(200).json({ deposit, message: "Deposit opened", status: "success" })
    } catch (error) {
        res.status(500).json({ error })
    }
}

exports.closeDeposit = async (req, res) => {
    try {
        const deposit = await Forex.findByIdAndUpdate(forexTableId, { $set: { isDepositOpen: false } }, { new: true });
        res.status(200).json({ deposit, message: "Deposit closed", status: "success" })
    } catch (error) {
        res.status(500).json({ error })
    }
}

exports.checkDepositStatus = async (req, res) => {
    try {
        const forexDetails = await Forex.find({})
        const depositStatus = forexDetails[0].isDepositOpen;

        if (depositStatus == true) {
            res.status(200).json({ message: "true", status: "success" })
        } else {
            res.status(200).json({ message: "false", status: "success" })
        }
    } catch (error) {
        res.status(500).json({ error })
    }
}

const updateTransactionStatus = async (txnId) => {
    let deposit = await ForexDeposit.findOne({ txnId: txnId })
    console.log(deposit)
    if (deposit) {
        await ForexDeposit.findByIdAndUpdate(deposit._id, { $set: { status: "success" } }, { new: true });
    }
}

exports.sendRoi = async (req, res) => {
    const data = req.body;
    try {
        startSchedule(data)
        res.status(200).json({ message: "Adding..." })
    } catch (error) {
        res.status(500).json({ message: "Error adding" })
    }
}

const updateWithdrawalStatus = async () => { }
