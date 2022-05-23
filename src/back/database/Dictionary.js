const DbUtils = require("./utils");

const getAllWords = async () => {
  try {
    const allWords = await DbUtils.getAllWords();
    return allWords;
  } catch (err) {
    throw err;
  }
};

module.exports = {
  getAllWords,
};
