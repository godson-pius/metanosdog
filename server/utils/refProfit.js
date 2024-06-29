const User = require("../models/User");
const Vendor = require("../models/Vendor");

exports.calculateRefProfit = async (master, role) => {
    let profit = 0;

    if (role == 'user') {
        profit = master.balance[0].deposit;
        if (master.children.length > 0) {
            for (const child of master.children) {
                const findUser = await User.findOne({ refId: child });
                profit += await this.calculateRefProfit(findUser, findUser.role);
            }
        }
    } else {
        profit = master.forexBalance[0].deposit;
        if (master.children.length > 0) {
            for (const child of master.children) {
                const findUser = await Vendor.findOne({ refId: child });
                profit += await this.calculateRefProfit(findUser, findUser.role);
            }
        }
    }

    return profit;
}