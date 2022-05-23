const sqlite3 = require("sqlite3").verbose();

const DBSOURCE = "words.sqlite";

const CREATE_TABLE = `CREATE TABLE words (
    id TEXT PRIMARY KEY,
    word_name TEXT,
    transcription TEXT,
    mean TEXT,
    description TEXT,
    created_at TEXT,
    updated_at TEXT 
)`;

const INSERT_WORD = `INSERT INTO words(id, word_name, transcription, mean, description, created_at, updated_at) VALUES(?, ?, ?, ?, ?, ?, ?)`;

const GET_ALL_WORDS = `SELECT * FROM words`;

const UDPATE = `UPDATE words SET updated_at = ? WHERE id = ?`;

const db = new sqlite3.Database(DBSOURCE, (err) => {
  if (err) console.error(err);
});

const dbCreate = () => {
  db.run(CREATE_TABLE);
};

//dbCreate();

const dbInsert = () => {
  db.run(
    INSERT_WORD,
    [
      "3434-ab-df",
      "hello world",
      "hell-o wod",
      "some description",
      "23 may 2022",
      "23 may 2022",
    ],
    (err) => {
      console.error(err);
    }
  );
};

//dbInsert();

const dbQuery = () => {
  db.all(GET_ALL_WORDS, (err, rows) => {
    console.log(rows);
  });
};

//dbQuery();

const dbUpdate = () => {
  db.run(UDPATE, ["24 may 2022", "3434-ab-df"], (err) => {
    console.error(err);
  });
};

//dbUpdate();

module.exports = db;
