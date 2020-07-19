const sampleData = require("./sampleData.json");

const SearchMemory = (req, res) => {
 return res
 .status(200)
 .set("Content-Type", "application/json")
  .send(JSON.stringify(sampleData.previews[0]));
};

module.exports = {
 SearchMemory,
};
