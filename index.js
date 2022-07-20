require("dotenv").config();
const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const v1DictionaryRouter = require("./src/back/v1/routes/dictionaryRoutes");
const authRouter = require("./src/back/v1/routes/authRouter");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const app = express();
app.use(cookieParser());
app.use(
  cors({
    origin: "*",
  })
);

const PORT = process.env.PORT || 8080;

app.use(bodyParser.json());

app.use(express.static("./src/front/dist"));

app.use("/api/v1/words", v1DictionaryRouter);
app.use("/api/v1/auth", authRouter);

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname + "/src/front/dist", "index.html"));
});

app.listen(PORT, () => {
  console.log(`API listening on port: :${PORT}`);
});
