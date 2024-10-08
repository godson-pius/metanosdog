// const { sleep } = require("./utils/helper");
// const axios = require("axios");


// const INTERVAL = 3000
// const URL = "http://localhost:4000/cron"
// module.exports = async function () {
//   while (true) {
//     await sleep(INTERVAL)
//     try {
//       const { data } = await axios.get(URL)
//       console.log("DATA:", data)
//     }
//     catch (err) {
//       console.log(err)(err)
//     }
//   }
// }