const DbUtils = require("./utils");

const getAllWords = async () => {
  try {
    const allWords = await DbUtils.getAllWords();
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
    console.log(updatedWord);
    return updatedWord;
  } catch (err) {
    throw err;
  }
};

module.exports = {
  getAllWords,
  createNewWord,
  getOneWord,
  updateOneWord,
};
