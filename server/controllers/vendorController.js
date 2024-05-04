const Vendor = require("../models/Vendor");
const bcrypt = require("bcrypt");
const { findByIdAndUpdate } = require("../models/Product");
const { rewardSystem } = require("../utils/rewardVendor");
const { rewardUpliners } = require("../utils/rewardUpliners");
const BasePrice = require("../models/BasePrice");

const handleRegistration = async (req, res) => {
  const {
    shopName,
    shopType,
    managerFullname,
    managerPhone,
    additionalPhone,
    emailAddress,
    password,
    refId,
    parentRefId
  } = req.body;
  const securedPassword = await bcrypt.hash(password, 10);
  var refReward;

  try {
    const vendor = await Vendor.create({
      shopName,
      shopType,
      managerFullname,
      managerPhone,
      additionalPhone,
      emailAddress,
      refId,
      parentId: parentRefId,
      password: securedPassword,
    });

    const parentVendor = await Vendor.findOne({ refId: parentRefId })
    if (parentVendor) {
      if (parentVendor.generation.length < 7) {
        const newGen = [...parentVendor.generation, refId]
        const newChild = [...parentVendor.children, refId]

        // Update children and generation column.
        await Vendor.findByIdAndUpdate(parentVendor._id, { $set: { generation: newGen, children: newChild } }, { new: true })

        // Give referal award
        const { price } = await BasePrice.findById("65d0a2e979b894623fc33315")

        // Call the reward system and update parent balance with reward.
        refReward = rewardSystem(parentVendor.generation.length, price) + parentVendor.balance;
        await Vendor.findByIdAndUpdate(parentVendor._id, { $set: { balance: refReward } }, { new: true })

        // Reward upliners
        rewardUpliners(parentVendor, price);

      } else {
        const newChild = [...parentVendor.children, refId]
        await Vendor.findByIdAndUpdate(parentVendor._id, { $set: { children: newChild } }, { new: true })

        // Call the reward system and update parent balance with reward.
        refReward = rewardSystem(parentVendor.generation.length, price) + parentVendor.balance;
        await Vendor.findByIdAndUpdate(parentVendor._id, { $set: { balance: refReward } }, { new: true })

        // Reward upliners
        rewardUpliners(parentVendor, price);
      }
    }

    res.status(200).json("success");
  } catch (error) {
    res.status(500).json({ error: error });
    console.log(error)
  }
};

const handleLogin = async (req, res) => {
  const { emailAddress, password } = req.body;

  try {
    const vendor = await Vendor.findOne({ emailAddress });
    if (!vendor) {
      res.status(404).json({ message: "Invalid Credentials" });
      return;
    }

    if (!bcrypt.compareSync(password, vendor.password)) {
      res.status(404).json({ message: "Invalid Credentials" });
      return;
    }

    res.status(200).json({ vendor });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const handleUpdateVendor = async (req, res) => {
  try {
    const { id } = req.params;
    const updates = req.body;
    const result = await Vendor.findByIdAndUpdate(id, updates, { new: true });

    res.status(200).json({ vendor: result, status: "success" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { handleRegistration, handleLogin, handleUpdateVendor };
