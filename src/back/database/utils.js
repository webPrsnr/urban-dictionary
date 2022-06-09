const db = require("../../../db_init");

const getAllWords = (filterParam) => {
  if (filterParam.alphabet) {
    const { alphabet, _offset } = filterParam;
    return new Promise((res, rej) => {
      const GET_ALL_WORD_BY_ALPHABET = `SELECT * FROM words WHERE word_name LIKE ? LIMIT ? OFFSET ?`;
      db.all(
        GET_ALL_WORD_BY_ALPHABET,
        [alphabet + "%", 12, _offset],
        (err, rows) => {
          if (err) {
            rej({
              status: 500,
              message: err,
            });
          }
          db.all(
            `SELECT * FROM words WHERE word_name LIKE ?`,
            [alphabet + "%"],
            (err, totalRows) => {
              if (err) {
                rej({
                  status: 500,
                  message: err,
                });
              }
              res({ totalRows, rows });
            }
          );
        }
      );
    });
  }
  return new Promise((res, rej) => {
    const GET_ALL_WORDS = `SELECT * FROM words`;
    db.all(GET_ALL_WORDS, (err, totalRows) => {
      if (err) {
        rej({
          status: 500,
          message: err,
        });
      }
      res({ totalRows });
    });
  });
};

const createNewWord = (newWord) => {
  return new Promise((res, rej) => {
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
          rej({
            status: 500,
            message: err,
          });
        }
        res(newWord);
      }
    );
  });
};

const getOneWord = (wordID) => {
  return new Promise((res, rej) => {
    const GET_WORD = `SELECT * FROM words WHERE id = ?`;
    db.all(GET_WORD, wordID, (err, row) => {
      if (err) {
        rej({
          status: 500,
          message: err,
        });
      }
      res(row);
    });
  });
};

const updateOneWord = async (id, changes) => {
  return new Promise((res, rej) => {
    const UPDATE_WORD = `UPDATE words SET
    word_name = COALESCE(?, word_name),
    transcription = COALESCE(?, transcription),
    mean = COALESCE(?, mean),
    description = COALESCE(?, description),
    created_at = COALESCE(?, created_at),
    updated_at = COALESCE(?, updated_at)
    WHERE id = ?
    `;
    db.run(
      UPDATE_WORD,
      [
        changes.word_name,
        changes.transcription,
        changes.mean,
        changes.description,
        changes.created_at,
        changes.updated_at,
        id,
      ],
      function (result, err) {
        if (err) {
          throw {
            status: 500,
            message: err,
          };
        }
        if (this.changes === 0) {
          rej({ status: 404, message: "ID does not exist" });
        }
        res({
          id: id,
          word_name: changes?.word_name,
          transcription: changes?.transcription,
          mean: changes?.mean,
          description: changes?.description,
          created_at: changes?.created_at,
          updated_at: changes.updated_at,
        });
      }
    );
  });
};

const deleteOneWord = (id) => {
  return new Promise((res, rej) => {
    const DELETE_WORD = "DELETE FROM words WHERE id= ? ";
    db.run(DELETE_WORD, id, function (result, err) {
      if (err) {
        rej({
          status: 500,
          message: err,
        });
      }
      if (this.changes === 0) {
        rej({
          status: 404,
          message: "ID does not exist",
        });
      }
      res(result);
    });
  });
};

module.exports = {
  getAllWords,
  createNewWord,
  getOneWord,
  updateOneWord,
  deleteOneWord,
};
