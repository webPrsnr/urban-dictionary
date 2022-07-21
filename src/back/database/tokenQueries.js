const TOKENS_GET_ONE = `SELECT * FROM tokens WHERE id LIKE ?`;
const TOKENS_INSERT = `INSERT INTO tokens(id, refresh_token) VALUES(?, ?)`;
const TOKENS_UPDATE = `UPDATE tokens SET refresh_token = COALESCE(?, refresh_token) WHERE id = ?`;

module.exports = {
  TOKENS_GET_ONE,
  TOKENS_INSERT,
  TOKENS_UPDATE,
};
