const GET_ALL_WORDS = `SELECT * FROM words`;
const GET_WORDS_LIMIT = `SELECT * FROM words WHERE word_name LIKE ? LIMIT ? OFFSET ?`;
const GET_WORDS_BY = `SELECT * FROM words WHERE word_name LIKE ?`;
const INSERT_WORD = `INSERT INTO words(id, word_name, transcription, mean, description, created_at, updated_at) VALUES(?, ?, ?, ?, ?, ?, ?)`;
const GET_WORD = `SELECT * FROM words WHERE id = ?`;
const UPDATE_WORD = `UPDATE words SET
    word_name = COALESCE(?, word_name),
    transcription = COALESCE(?, transcription),
    mean = COALESCE(?, mean),
    description = COALESCE(?, description),
    created_at = COALESCE(?, created_at),
    updated_at = COALESCE(?, updated_at)
    WHERE id = ?
    `;
const DELETE_WORD = "DELETE FROM words WHERE id= ? ";

module.exports = {
  GET_ALL_WORDS,
  GET_WORDS_LIMIT,
  GET_WORDS_BY,
  INSERT_WORD,
  GET_WORD,
  UPDATE_WORD,
  DELETE_WORD,
};
