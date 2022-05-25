const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const v1DictionaryRouter = require("./src/back/v1/routes/dictionaryRoutes");
const cors = require("cors");

const app = express();
app.use(
  cors({
    origin: "*",
  })
);

const PORT = process.env.PORT || 8080;

app.use(bodyParser.json());

app.use(express.static("./src/front/dist"));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + "./src/front/dist/index.html"));
});

app.use("/api/v1/words", v1DictionaryRouter);

app.listen(PORT, () => {
  console.log(`API listening on port: :${PORT}`);
});
