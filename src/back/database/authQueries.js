const USERS_GET_ONE = `SELECT * FROM users WHERE login LIKE ?`;
const USERS_INSERT = `INSERT INTO users(id, login, password) VALUES(?, ?, ?)`;

module.exports = {
  USERS_GET_ONE,
  USERS_INSERT,
};
