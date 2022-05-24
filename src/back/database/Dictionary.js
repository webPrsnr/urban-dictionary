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

module.exports = {
  getAllWords,
  createNewWord,
};
