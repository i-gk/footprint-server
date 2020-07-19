const sampleData = require("./sampleData.json");

const GetMomories = (req, res) => {
 return res
  .status(200)
  .set("Content-Type", "application/json")
  .send(JSON.stringify(sampleData));
};

module.exports = {
 GetMomories,
};
