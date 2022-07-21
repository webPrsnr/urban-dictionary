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

module.exports = {
  generateTokens,
  saveToken,
};
