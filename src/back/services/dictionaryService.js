const Dictionary = require("../database/Dictionary");
const { v4: uuid } = require("uuid");

const getAllWords = async () => {
  try {
    const allWords = await Dictionary.getAllWords();
    return allWords;
  } catch (error) {
    throw error;
  }
};

const createNewWord = async (newWord) => {
  const wordToInsert = {
    id: uuid(),
    ...newWord,
    created_at: new Date().toLocaleString(),
    updated_at: new Date().toLocaleString(),
  };
  try {
    const createdWord = await Dictionary.createNewWord(wordToInsert);
    return createdWord;
  } catch (error) {
    throw error;
  }
};

const getOneWord = async (wordID) => {
  try {
    const word = await Dictionary.getOneWord(wordID);
    return word;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getAllWords,
  createNewWord,
  getOneWord,
};
