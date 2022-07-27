const jwt = require("jsonwebtoken");
const Token = require("../database/Token");

const generateTokens = (payload) => {
  const accessToken = jwt.sign(payload, process.env.SECRET_JWT_ACESS, {
    expiresIn: "30m",
  });
  const refreshToken = jwt.sign(payload, process.env.SECRET_JWT_REFRESH, {
    expiresIn: "30m",
  });
  return {
    accessToken,
    refreshToken,
  };
};

const saveToken = async (userId, refreshToken) => {
  const token = await Token.find(userId);
  if (token.length) {
    await Token.refresh(userId, refreshToken);
    return;
  }
  await Token.create(userId, refreshToken);
};

const removeToken = async (refreshToken) => {
  await Token.delete(refreshToken);
};

const checkAcessToken = (token) => {
  try {
    const userData = jwt.verify(token, process.env.SECRET_JWT_ACESS);
    return userData;
  } catch (error) {
    return null;
  }
};

const checkRefreshToken = (token) => {
  try {
    const userData = jwt.verify(token, process.env.SECRET_JWT_REFRESH);
    return userData.id;
  } catch (error) {
    return null;
  }
};

const findToken = async (token) => {
  const tokenData = await Token.findToken(token);
  return tokenData;
};

module.exports = {
  generateTokens,
  saveToken,
  removeToken,
  checkAcessToken,
  checkRefreshToken,
  findToken,
};
