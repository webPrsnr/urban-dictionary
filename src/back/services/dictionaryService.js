const Dictionary = require("../database/Dictionary");

const getAllWords = async () => {
  try {
    const allWords = await Dictionary.getAllWords();
    return allWords;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getAllWords,
};
