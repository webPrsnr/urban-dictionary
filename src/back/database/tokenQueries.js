const TOKENS_GET_ONE = `SELECT * FROM tokens WHERE id LIKE ?`;
const TOKENS_INSERT = `INSERT INTO tokens(id, refresh_token) VALUES(?, ?)`;
const TOKENS_UPDATE = `UPDATE tokens SET refresh_token = COALESCE(?, refresh_token) WHERE id = ?`;
const TOKENS_DELETE = "DELETE FROM tokens WHERE refresh_token = ?";
const TOKENS_GET_ONE_TOKEN = `SELECT * FROM tokens WHERE refresh_token LIKE ?`;

module.exports = {
  TOKENS_GET_ONE,
  TOKENS_INSERT,
  TOKENS_UPDATE,
  TOKENS_DELETE,
  TOKENS_GET_ONE_TOKEN,
};
