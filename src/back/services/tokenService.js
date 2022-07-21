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
  console.log("token", token);
  if (token.length) {
    const refreshData = await Token.refresh(userId, refreshToken);
    console.log("TOKEN IS EXIST");
    return;
  }
  const tokenData = await Token.create(userId, refreshToken);
};

module.exports = {
  generateTokens,
  saveToken,
};
