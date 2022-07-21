const TOKENS_GET_ONE = `SELECT * FROM tokens WHERE id LIKE ?`;
const TOKENS_INSERT = `INSERT INTO tokens(id, refresh_token) VALUES(?, ?)`;

module.exports = {
  TOKENS_GET_ONE,
  TOKENS_INSERT,
};
