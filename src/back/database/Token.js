const {
  TOKENS_GET_ONE,
  TOKENS_UPDATE,
  TOKENS_INSERT,
} = require("./tokenQueries");
const { CommonQuery, dbRun } = require("./utils");

class Token extends CommonQuery {
  async find(userId) {
    return super.find(userId, TOKENS_GET_ONE);
  }

  async create(...params) {
    return super.create(params, TOKENS_INSERT);
  }

  async refresh(userId, refreshToken) {
    console.log("before data");
    const data = await dbRun(
      `UPDATE tokens SET refresh_token = ${refreshToken} WHERE id = ${userId}`
    );
    console.log("after data");
    // return data;
  }
}

module.exports = new Token();
