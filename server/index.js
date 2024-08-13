require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const userRoute = require("./routes/userRoute")
const productRoute = require("./routes/productRoute")
const vendorRoute = require("./routes/vendorRoute")
const ticketRoute = require("./routes/ticketRoute")
const cartRoute = require("./routes/cartRoute")
const reviewRoute = require("./routes/reviewRoute")
const referralRoute = require("./routes/referralRoute");
const orderRoute = require("./routes/orderRoute");
const forexRoute = require("./routes/forexRoute");
const BasePrice = require("./models/BasePrice");

module.exports = function () {
  const app = express();
  const PORT = process.env.PORT;

  //MiddleWare
  app.use(cors());
  app.use(express.json({ limit: "50mb" }));
  app.use(express.urlencoded({ extended: true }));

  //Routes
  app.use('/api/user', userRoute)
  app.use('/api/product', productRoute)
  app.use('/api/vendor', vendorRoute)
  app.use('/api/ticket', ticketRoute)
  app.use('/api/cart', cartRoute)
  app.use('/api/review', reviewRoute)
  app.use('/api/referral', referralRoute)
  app.use('/api/order', orderRoute)
  app.use('/api/forex', forexRoute)

  app.get('/api/basePrice', async (req, res) => {
    const price = await BasePrice.find({})
    res.status(200).json({ price, status: 200 })
  })

  // DB SET-UP
  mongoose.set('strictQuery', false);
  mongoose.connect(
    process.env.MONGODB_URL,
    { useNewUrlParser: true, useUnifiedTopology: true, autoIndex: true },
    () => {
      app.listen(PORT, () => {
        console.log("App is running on port", PORT);
      });
    }
  );

  // startSchedule()

  //Default Route
  app.get('/', (req, res) => {
    res.json({ state: 'Running...' })
  })
}