const User = require("../database/Auth");
const { v4: uuid } = require("uuid");
const bcrypt = require("bcrypt");
const tokenService = require("./tokenService");

const registration = async (login, password) => {
  const candidate = await User.find(login);
  if (candidate.length) {
    throw new Error(`Login "${login}" alredy exist`);
  }
  const paramsToInsert = {
    id: uuid(),
    login: login,
    password: await bcrypt.hash(password, 3),
  };
  const user = await User.create(paramsToInsert);

  const payload = { id: user[0], login: user[1] };
  const tokens = tokenService.generateTokens(payload);

  tokenService.saveToken(user[0], tokens.refreshToken);
  return {
    id: user[0],
    login: user[1],
    tokens,
  };
};

const login = async (login, password) => {
  const candidate = await User.find(login);
  if (!candidate.length) {
    throw new Error(`User "${login}" not found`);
  }
  const isPassEqual = await bcrypt.compare(password, candidate[0].password);
  if (!isPassEqual) {
    throw new Error(`Password is wrong`);
  }

  const payload = { id: candidate[0], login: candidate[1] };
  const tokens = tokenService.generateTokens(payload);

  await tokenService.saveToken(candidate[0].id, tokens.refreshToken);
  return {
    id: candidate[0].id,
    login: candidate[0].login,
    tokens,
  };
};

const logout = async () => {};

const refresh = async () => {};

module.exports = {
  registration,
  login,
  logout,
  refresh,
};
