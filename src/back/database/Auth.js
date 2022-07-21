const { USERS_GET_ONE, USERS_INSERT } = require("./authQueries");
const { CommonQuery } = require("./utils");

class User extends CommonQuery {
  async find(login) {
    return super.find(login, USERS_GET_ONE);
  }

  async create(params) {
    const data = [params.id, params.login, params.password];
    const resp = super.create(data, USERS_INSERT);
    return resp;
  }
}

module.exports = new User();
