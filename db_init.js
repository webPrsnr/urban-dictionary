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

const db = new sqlite3.Database(DBSOURCE, (err) => {
  if (err) console.error(err);
});

module.exports = db;
