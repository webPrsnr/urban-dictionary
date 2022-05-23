const db = require("../../../db_init");

const getAllWords = () => {
  return new Promise((res, rej) => {
    try {
      const GET_ALL_WORDS = `SELECT * FROM words`;
      db.all(GET_ALL_WORDS, (err, rows) => {
        if (err) {
          throw {
            status: 500,
            message: err,
          };
        }
        res(rows);
      });
    } catch (err) {
      throw {
        status: 500,
        message: err,
      };
    }
  });
};

module.exports = {
  getAllWords,
};
