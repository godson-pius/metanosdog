const { sleep, calculateDateDifference } = require("./utils/helper");
const Deposit = require("./models/Deposit");
const User = require("./models/User");

const INTERVAL = 10_000
module.exports = async function () {
  while (true) {
    await sleep(INTERVAL)

    // FETCH ALL ACTIVE DEPOSIT 
    const deposits = await Deposit.find({
      has_expired: false,
      status: 'success'
    })
    console.log("DEPOSITS", deposits)

    // LOOP THROUGH ALL DEPOSIT
    for (const deposit of deposits) {

      // CHECK IF IT'S UP TO A WEEK YET
      const { isAWeek, monthsDifference } = calculateDateDifference(new Date(deposit.date_deposited))
      if(isAWeek) {
        const profix = (deposit.amount * 2) / 100 

        // CREDIT WALLET
        const user = await User.findOne({ _id: deposit.user._id })
        if(!user) continue;

        const wallets = [...user.balance] // ARRAY
        wallets[0]['forex'] = (wallets[0]['forex'] ?? 0) + profix

        // UPDATE USER
        user.balance = wallets
        await user.save()
        console.log("PROFIT CREDITED TO WALLET", user.balance)

        // CHECK IF IT'S UP TO 8 MONTHS
        if(monthsDifference >= 8) {
          // UPDATE DEPOSIT
          deposit.has_expired = true
          deposit.date_deposited = new Date()
          await deposit.save()
        }
      }

    }

    console.log("CRON_RUNNING")
  }
}