const Vendor = require("../models/Vendor");
const bcrypt = require("bcrypt");
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

      } else {
        const newChild = [...parentVendor.children, refId]
        await Vendor.findByIdAndUpdate(parentVendor._id, { $set: { children: newChild } }, { new: true })
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

const activateAccount = async (req, res) => {
  try {
    const { id, method, amount } = req.params;
    const vendor = await Vendor.findById(id);

    if (!vendor) {
      res.status(404).json({ error: "No vendor found" })
      return
    }

    if (method == 'fiat') {
      await Vendor.findByIdAndUpdate(id, { $set: { active: true } }, { new: true });
      res.status(200).json({ vendor, status: "success" })
    } else {

      vendor.forexBalance[0].metanosdog -= amount;
      const newBal = vendor.forexBalance

      await Vendor.findByIdAndUpdate(id, { active: true, forexBalance: newBal }, { new: true });
      res.status(200).json({ vendor, status: "success" })
    }

    const parentVendor = await Vendor.findOne({ refId: vendor.parentId })
    if (parentVendor) {
      if (parentVendor.generation.length < 7) {
        // Call the reward system and update parent balance with reward.
        refReward = rewardSystem(parentVendor.generation.length, amount) + parentVendor.balance;
        await Vendor.findByIdAndUpdate(parentVendor._id, { $set: { balance: refReward } }, { new: true })

        // Reward upliners
        rewardUpliners(parentVendor, price);

      }
    }

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

const handleGetUser = async (req, res) => {
  const { email } = req.params;
  try {
    const user = await Vendor.find({ emailAddress: email })
    res.status(200).json({ user, status: "success" })
  } catch (error) {
    res.status(500).json({ error: error })
  }
}

module.exports = { handleRegistration, handleLogin, handleUpdateVendor, activateAccount, handleGetUser };
