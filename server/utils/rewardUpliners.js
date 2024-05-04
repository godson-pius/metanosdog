const Vendor = require("../models/Vendor");
const { rewardSystem } = require("./rewardVendor");

exports.rewardUpliners = async (directParent, price) => {
    const getUpliner2 = await Vendor.findOne({ refId: directParent.parentId })
    if (getUpliner2) {
        refReward = rewardSystem(1, price) + getUpliner2.balance;
        await Vendor.findByIdAndUpdate(getUpliner2._id, { $set: { balance: refReward } }, { new: true })

        const getUpliner3 = await Vendor.findOne({ refId: getUpliner2.parentId })
        if (getUpliner3) {
            refReward = rewardSystem(2, price) + getUpliner3.balance;
            await Vendor.findByIdAndUpdate(getUpliner3._id, { $set: { balance: refReward } }, { new: true })

            const getUpliner4 = await Vendor.findOne({ refId: getUpliner3.parentId })
            if (getUpliner4) {
                refReward = rewardSystem(3, price) + getUpliner4.balance;
                await Vendor.findByIdAndUpdate(getUpliner4._id, { $set: { balance: refReward } }, { new: true })

                const getUpliner5 = await Vendor.findOne({ refId: getUpliner4.parentId })
                if (getUpliner5) {
                    refReward = rewardSystem(4, price) + getUpliner5.balance;
                    await Vendor.findByIdAndUpdate(getUpliner5._id, { $set: { balance: refReward } }, { new: true })

                    const getUpliner6 = await Vendor.findOne({ refId: getUpliner5.parentId })
                    if (getUpliner6) {
                        refReward = rewardSystem(5, price) + getUpliner6.balance;
                        await Vendor.findByIdAndUpdate(getUpliner6._id, { $set: { balance: refReward } }, { new: true })

                        const getUpliner7 = await Vendor.findOne({ refId: getUpliner6.parentId })
                        if (getUpliner7) {
                            refReward = rewardSystem(6, price) + getUpliner7.balance;
                            await Vendor.findByIdAndUpdate(getUpliner7._id, { $set: { balance: refReward } }, { new: true })
                        }
                    }
                }
            }
        }
    }



}