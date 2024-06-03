const Forex = require("../models/Forex");
const User = require("../models/User");
const Vendor = require("../models/Vendor");
const { closeDepositAmount, forexTableId } = require("../utils/controlVal");
const { calculateRefProfit } = require("../utils/refProfit");
const { startSchedule } = require("../utils/scheduler");

exports.getTransactions = async (req, res) => {
    try {
        const txns = await Forex.find({})
        res.status(200).json({ txns, status: "success" })
    } catch (error) {
        res.status(500).json({ error })
    }
}

exports.getRefProfit = async (req, res) => {
    try {
        const { userId, role } = req.params;

        if (role == "user") {
            const user = await User.findById(userId);
            const profit = calculateRefProfit(user)
            // do something with the user
        } else if (role == "vendor") {
            // do something with vendor
        }

        const order = await findByIdAndUpdate(orderId, { dispatched: "success" }, { new: true });
        res.status(200).json(order)
    } catch (error) {
        res.status(500).json({ error })
    }
}

exports.handleDeposit = async (req, res) => {
    try {
        const data = req.body;
        let totalDeposits = 0;

        const forexDetails = await Forex.find()
        const deposits = forexDetails[0].deposits;
        deposits.forEach((deposit) => {
            totalDeposits += deposit.amount
        })

        if (totalDeposits < closeDepositAmount) {
            deposits.push(data)
            const deposit = await Forex.findByIdAndUpdate(forexTableId, { $set: { deposits: deposits } }, { new: true });
            res.status(200).json({ deposit, status: "success" })
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

        const forexDetails = await Forex.find()
        const withdrawals = forexDetails[0].withdrawals;

        withdrawals.push(data)
        const withdrawal = await Forex.findByIdAndUpdate(forexTableId, { $set: { withdrawals: withdrawals } }, { new: true });
        res.status(200).json({ withdrawal, status: "success" })

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

                const deposit = await User.findByIdAndUpdate(data.id, { $set: { balance: currentBal } }, { new: true });
                res.status(200).json({ deposit, status: "success" })
            }
        } else if (role == "vendor") {
            const user = await Vendor.findById(data.id)
            const currentBal = user.forexBalance;
            currentBal[0].deposit += data.amount

            const deposit = await Vendor.findByIdAndUpdate(data.id, { $set: { forexBalance: currentBal } }, { new: true });
            res.status(200).json({ deposit, status: "success" })
        }

        // Start CRON job
        startSchedule(data)
        
    } catch (error) {
        res.status(500).json({ error })
    }

}

exports.checkMaxDeposit = async (req, res) => {
    try {
        let totalDeposits = 0;

        const forexDetails = await Forex.find({})
        const deposits = forexDetails[0].deposits;

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
        let totalDeposits = 0;

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
    const transactions = await Forex.find({})
    let deposits = transactions[0].deposits;

    deposits.forEach(deposit => {
        if (deposit.txnId == txnId) {
            deposit.status = "success";
        }
    })

    await Forex.findByIdAndUpdate(forexTableId, { $set: { deposits: deposits } }, { new: true });
}
