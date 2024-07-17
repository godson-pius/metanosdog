const cron = require("node-cron");
const User = require("../models/User");
const Vendor = require("../models/Vendor");

exports.startScheduleForUsers = (data) => {
    const userTasks = new Map();

    const schedule = '0 0 * * *';
    // const schedule = '*/5 * * * * *';

    const task = cron.schedule(schedule, async () => {

        // Get the current date
        const currentDate = new Date()

        // Calculate the end date, which is eight months from the start date
        const endDate = new Date();
        endDate.setMonth(currentDate.getMonth() + 8);

        if (currentDate <= endDate) {
            const amount = (0.2 * data.amount) / this.getNumberOfDaysInAMonth()
            const user = await User.findOne({ _id: data.id });
            if (user) {
                const balance = user.balance;
                balance[0].roi += amount;
                await User.findByIdAndUpdate(data.id, { $set: { balance: balance } }, { new: true });
                console.log(`Return of investment added: ${amount}`)
            } else {
                console.log("No user found")
            }
        } else {
            task.stop();
        }

    }, { scheduled: true })

    userTasks.set(2, task)
    // cron.schedule("* * * * *", task)
}

exports.startScheduleForVendors = (data) => {
    const userTasks = new Map();

    const schedule = '0 0 * * *';
    // const schedule = '*/5 * * * * *';

    const task = cron.schedule(schedule, async () => {

        // Get the current date
        const currentDate = new Date()

        // Calculate the end date, which is eight months from the start date
        const endDate = new Date();
        endDate.setMonth(currentDate.getMonth() + 8);

        if (currentDate <= endDate) {
            const amount = (0.2 * data.amount) / this.getNumberOfDaysInAMonth()
            const user = await Vendor.findOne({ _id: data.id });
            if (user) {
                const balance = user.forexBalance;
                balance[0].roi += amount;
                await User.findByIdAndUpdate(data.id, { $set: { forexBalance: balance } }, { new: true });
                console.log(`Return of investment added: ${amount}`)
            } else {
                console.log("No user found")
            }
        } else {
            task.stop();
        }

    }, { scheduled: true })

    userTasks.set(2, task)
    // cron.schedule("* * * * *", task)
}

exports.getNumberOfDaysInAMonth = () => {
    const currentYear = new Date().getFullYear()
    const currentMonthIndex = new Date().getMonth() + 1;

    return new Date(currentYear, currentMonthIndex, 0).getDate()
}