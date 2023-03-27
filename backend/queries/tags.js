// import db
const db = require("../db/dbConfig.js");

const getAllTagsByCurrencyId = async (cid) => {
  const tags = await db.any('SELECT * FROM tags WHERE currency_id = $1', [cid]);
  return tags;
};

module.exports = {
  getAllTagsByCurrencyId
};
