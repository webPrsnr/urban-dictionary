const DbUtils = require("./utils");
const queries = require("./queries");

const getAllWords = async (filterParam) => {
  const { alphabet, _offset, sort } = filterParam;
  try {
    if (alphabet && _offset) {
      const totalCount = await DbUtils.dbAll(queries.GET_WORDS_BY, [
        alphabet + "%",
      ]);
      const allWords = await DbUtils.dbAll(queries.GET_WORDS_LIMIT, [
        alphabet + "%",
        12,
        _offset,
      ]);
      return { allWords, totalCount };
    }
    if (!alphabet && _offset && sort) {
      const SQLquery = DbUtils.getSorted(sort);
      const totalCount = await DbUtils.dbAll(queries.GET_ALL_WORDS);
      const allWords = await DbUtils.dbAll(SQLquery, [12, _offset]);
      return { allWords, totalCount };
    }
    const allWords = await DbUtils.dbAll(queries.GET_ALL_WORDS);
    return { allWords, totalCount: allWords };
  } catch (err) {
    throw err;
  }
};

const createNewWord = async (newWord) => {
  try {
    const insertWord = await DbUtils.dbRun(queries.INSERT_WORD, [
      newWord.id,
      newWord.word_name,
      newWord.transcription,
      newWord.mean,
      newWord.description,
      newWord.created_at,
      newWord.updated_at,
    ]);
    return insertWord;
  } catch (err) {
    throw err;
  }
};

const getOneWord = async (wordID) => {
  try {
    const resultWord = await DbUtils.dbAll(queries.GET_WORD, wordID);
    return resultWord;
  } catch (err) {
    throw err;
  }
};

const updateOneWord = async (id, changes) => {
  try {
    const updatedWord = await DbUtils.dbRun(queries.UPDATE_WORD, [
      changes.word_name,
      changes.transcription,
      changes.mean,
      changes.description,
      changes.created_at,
      changes.updated_at,
      id,
    ]);
    return updatedWord;
  } catch (err) {
    throw err;
  }
};

const deleteOneWord = async (id) => {
  try {
    const changes = await DbUtils.dbRun(queries.DELETE_WORD, id);
    return changes;
  } catch (err) {
    throw err;
  }
};

module.exports = {
  getAllWords,
  createNewWord,
  getOneWord,
  updateOneWord,
  deleteOneWord,
};
