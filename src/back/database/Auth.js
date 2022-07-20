const { USERS_GET_ONE, USERS_INSERT } = require("./authQueries");
const { dbAll, dbRun } = require("./utils");

class User {
  async find(login) {
    const data = await dbAll(USERS_GET_ONE, login);
    return data;
  }

  async create(params) {
    const data = await dbRun(USERS_INSERT, [
      params.id,
      params.login,
      params.password,
    ]);
    return data;
  }
}

module.exports = new User();
