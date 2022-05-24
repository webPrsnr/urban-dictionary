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

const createNewWord = (newWord) => {
  return new Promise((res, rej) => {
    try {
      const INSERT_WORD = `INSERT INTO words(id, word_name, transcription, mean, description, created_at, updated_at) VALUES(?, ?, ?, ?, ?, ?, ?)`;
      db.run(
        INSERT_WORD,
        [
          newWord.id,
          newWord.word_name,
          newWord.transcription,
          newWord.mean,
          newWord.description,
          newWord.created_at,
          newWord.updated_at,
        ],
        (err) => {
          if (err) {
            throw {
              status: 500,
              message: err,
            };
          }
          res(newWord);
        }
      );
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
  createNewWord,
};
