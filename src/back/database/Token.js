const {
  TOKENS_GET_ONE,
  TOKENS_INSERT,
  TOKENS_UPDATE,
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
    await dbRun(TOKENS_UPDATE, [refreshToken, userId]);
  }
}

module.exports = new Token();
