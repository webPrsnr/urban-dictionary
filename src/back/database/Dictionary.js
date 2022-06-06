const DbUtils = require("./utils");

const getAllWords = async (filterParam) => {
  try {
    const allWords = await DbUtils.getAllWords(filterParam);
    return allWords;
  } catch (err) {
    throw err;
  }
};

const createNewWord = async (newWord) => {
  try {
    const insertWord = await DbUtils.createNewWord(newWord);
    return insertWord;
  } catch (err) {
    throw err;
  }
};

const getOneWord = (wordID) => {
  try {
    const resultWord = DbUtils.getOneWord(wordID);
    return resultWord;
  } catch (err) {
    throw err;
  }
};

const updateOneWord = async (id, changes) => {
  try {
    const updatedWord = await DbUtils.updateOneWord(id, changes);
    return updatedWord;
  } catch (err) {
    throw err;
  }
};

const deleteOneWord = async (id) => {
  try {
    const changes = await DbUtils.deleteOneWord(id);
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
