const dictionaryService = require("../services/dictionaryService");

const getAllWords = async (req, res) => {
  try {
    const allWords = await dictionaryService.getAllWords();
    res.json({ status: "OK", data: allWords });
  } catch (error) {
    res.status(error?.status || 500).send({
      status: "FAILED",
      data: { error: error?.message || error },
    });
  }
};

const getOneWord = (req, res) => {
  return;
};

const createNewWord = (req, res) => {
  return;
};

const updateOneWord = (req, res) => {
  return;
};

const deleteOneWord = (req, res) => {
  return;
};

module.exports = {
  getAllWords,
  getOneWord,
  createNewWord,
  updateOneWord,
  deleteOneWord,
};
