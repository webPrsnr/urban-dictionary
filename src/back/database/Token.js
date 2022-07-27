const {
  TOKENS_GET_ONE,
  TOKENS_INSERT,
  TOKENS_UPDATE,
  TOKENS_DELETE,
  TOKENS_GET_ONE_TOKEN,
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

  async delete(refreshToken) {
    await dbRun(TOKENS_DELETE, refreshToken);
  }

  async findToken(token) {
    return super.find(token, TOKENS_GET_ONE_TOKEN);
  }
}

module.exports = new Token();
