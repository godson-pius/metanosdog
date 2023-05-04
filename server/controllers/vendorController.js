const Vendor = require("../models/Vendor");
const bcrypt = require("bcrypt");
const { findByIdAndUpdate } = require("../models/Product");

const handleRegistration = async (req, res) => {
  const {
    shopName,
    shopType,
    managerFullname,
    managerPhone,
    additionalPhone,
    emailAddress,
    password,
  } = req.body;
  const securedPassword = await bcrypt.hash(password, 10);

  try {
    const vendor = await Vendor.create({
      shopName,
      shopType,
      managerFullname,
      managerPhone,
      additionalPhone,
      emailAddress,
      password: securedPassword,
    });
    res.status(200).json("success");
  } catch (error) {
    res.status(500).json({ error: error });
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
