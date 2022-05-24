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

const createNewWord = async (req, res) => {
  const { body } = req;
  if (
    !body.word_name ||
    !body.transcription ||
    !body.mean ||
    !body.description ||
    !body.created_at ||
    !body.updated_at
  ) {
    res.status(400).send({
      status: "FAILED",
      data: {
        error:
          "One of the following keys is missing or is empty in request body: 'word_name' 'transcription' 'mean' 'description' 'created_at' 'updated_at'",
      },
    });
  }
  const newWord = {
    word_name: body.word_name,
    transcription: body.transcription,
    mean: body.mean,
    description: body.description,
  };

  try {
    const createdWord = await dictionaryService.createNewWord(newWord);
    res.status(200).send({ status: "OK", data: createdWord });
  } catch (error) {
    res.status(error?.status || 500).send({
      status: "FAILED",
      data: { error: error?.message || error },
    });
  }
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
