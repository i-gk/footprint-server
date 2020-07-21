const { previews } = require("./sampleData.json");

const SearchMemory = (req, res) => {
 const searchResutls = searchResults(req.query.query) || [];

 return res
  .status(200)
  .set("Content-Type", "application/json")
  .send(JSON.stringify(searchResutls));
};

function searchResults(query) {
 return previews.filter((preview) => {
  const serachStr = `${preview.title} ${preview.year} ${preview.location.reigon} ${preview.location.country}`;
  const regex = new RegExp(query, "i");

  return regex.test(serachStr);
 });
}

module.exports = {
 SearchMemory,
};
