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
const referralRoute = require("./routes/referralRoute")

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

//Default Route
app.get('/', (req, res) => {
    res.json({ state: 'Running...' })
})
