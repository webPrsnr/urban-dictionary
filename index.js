const express = require("express");
const bodyParser = require("body-parser");
const v1DictionaryRouter = require("./src/back/v1/routes/dictionaryRoutes");

const app = express();

const PORT = process.env.PORT || 8080;

app.use(bodyParser.json());

app.use("/api/v1/words", v1DictionaryRouter);

app.listen(PORT, () => {
  console.log(`API listening on port: :${PORT}`);
});
