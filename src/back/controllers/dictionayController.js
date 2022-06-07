const dictionaryService = require("../services/dictionaryService");

const getAllWords = async (req, res) => {
  const { alphabet, _offset } = req.query;
  try {
    const allWords = await dictionaryService.getAllWords({ alphabet, _offset });
    res.set("x-content", allWords.totalRows.length);
    res.json({ status: "OK", data: allWords.rows });
  } catch (error) {
    res.status(error?.status || 500).send({
      status: "FAILED",
      data: { error: error?.message || error },
    });
  }
};

const getOneWord = async (req, res) => {
  const {
    params: { wordID },
  } = req;
  if (!wordID) {
    res.status(400).send({
      status: "FAILED",
      data: { error: "Parameter ':wordID' can not be empty." },
    });
  }
  try {
    const oneWord = await dictionaryService.getOneWord(wordID);
    res.send({ status: "OK", data: oneWord });
  } catch (error) {
    res.status(error?.status || 500).send({
      status: "FAILED",
      data: { error: error?.message || error },
    });
  }
  return;
};

const createNewWord = async (req, res) => {
  const { body } = req;
  if (
    !body.word_name ||
    !body.transcription ||
    !body.mean ||
    !body.description
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

const updateOneWord = async (req, res) => {
  const {
    body,
    params: { wordID },
  } = req;
  if (!wordID) {
    res.status(400).send({
      status: "FAILED",
      data: {
        error: "Parameter ':wordID' can not be empty.",
      },
    });
  }
  try {
    const updatedWord = await dictionaryService.updateOneWord(wordID, body);
    res.send({ status: "OK", data: updatedWord });
  } catch (error) {
    res.status(error?.status || 500).send({
      status: "FAILED",
      data: { error: error?.message || error },
    });
  }
};

const deleteOneWord = async (req, res) => {
  const {
    params: { wordID },
  } = req;
  if (!wordID) {
    res.status(400).send({
      status: "FAILED",
      data: {
        error: "Parameter ':wordID' can not be empty.",
      },
    });
  }
  try {
    const result = await dictionaryService.deleteOneWord(wordID);
    res.status(200).send({ status: "OK", data: result });
  } catch (error) {
    res.status(error?.status || 500).send({
      status: "FAILED",
      data: { error: error?.message || error },
    });
  }
};

module.exports = {
  getAllWords,
  getOneWord,
  createNewWord,
  updateOneWord,
  deleteOneWord,
};
