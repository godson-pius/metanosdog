const cron = require("node-cron");
const User = require("../models/User");

// Every week in eight months
exports.startSchedule = (data) => {
    const userTasks = new Map();

    // Get the current date
    const startDate = new Date()

    // Calculate the end date, which is eight months from the start date
    const endDate = new Date();
    endDate.setMonth(startDate.getMonth() + 8);

    // Define the cron schedule for weekly execution. Runs every Sunday at midnight.
    const schedule = '0 0 * * 0';

    // Define the amount to add
    const amountToAdd = 0.2 * data.amount

    const task = cron.schedule(schedule, async() => {
        const currentDate = new Date()

        if (currentDate <= endDate) {
            // Balance topping starts here
            try {
                if (data.role == "user") {
                    const user = await User.findById(data.id)
                    if (user) {
                        const currentBal = user.balance;
                        currentBal[0].roi += amountToAdd
        
                        // Update the roi status
                        updateTransactionStatus(data.txnId);
        
                        const roi = await User.findByIdAndUpdate(data.id, { $set: { balance: currentBal } }, { new: true });
                        res.status(200).json({ roi, status: "success" })
        
                        // Start CRON job
                        
                    }
                } else if (role == "vendor") {
                    const user = await Vendor.findById(data.id)
                    const currentBal = user.forexBalance;
                    currentBal[0].roi += amountToAdd
        
                    const roi = await Vendor.findByIdAndUpdate(data.id, { $set: { forexBalance: currentBal } }, { new: true });
                    res.status(200).json({ roi, status: "success" })
                }
            } catch (error) {
                res.status(500).json({ error })
            }
        } else {
            task.stop();
            userTasks.delete(data.id)
        }
    }, { scheduled: true })

    userTasks.set(data.id, task)
}