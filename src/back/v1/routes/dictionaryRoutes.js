const express = require("express");

const dictionaryController = require("../../controllers/dictionayController");

const router = express.Router();

router.get("/", dictionaryController.getAllWords);

router.get("/:wordID", dictionaryController.getOneWord);

router.post("/", dictionaryController.createNewWord);

router.patch("/:wordID", dictionaryController.updateOneWord);

router.delete("/:wordID", dictionaryController.deleteOneWord);

module.exports = router;
