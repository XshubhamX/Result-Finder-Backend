const axios = require("axios");

const sendRequest = async (r_no) => {
  const result = await axios.get(
    `https://eduyear.in/api/result?rollnumber=${r_no}`
  );

  return result.data;
};

module.exports = {
  sendRequest,
};
