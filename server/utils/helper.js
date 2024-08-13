
const sleep = (time = 5000) => new Promise((res) => setTimeout(res, time))

const calculateDateDifference = (date) => {
  const now = new Date();

  const yearsDifference = now.getFullYear() - date.getFullYear();
  const monthsDifference = yearsDifference * 12 + (now.getMonth() - date.getMonth());

  const timeDifference = Math.abs(now.getTime() - date.getTime());
  const daysDifference = Math.ceil(timeDifference / (1000 * 3600 * 24));

  const isAWeek = daysDifference <= 7;

  return {
    monthsDifference,
    isAWeek,
  };
}

module.exports = {
  sleep,
  calculateDateDifference
}