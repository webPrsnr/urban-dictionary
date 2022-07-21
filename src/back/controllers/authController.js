const authService = require("../services/authService");

const registration = async (req, res) => {
  try {
    const { body } = req;
    const newUser = await authService.registration(body.login, body.password);
    res.cookie("refreshToken", newUser.tokens.refreshToken, {
      maxAge: 30 * 24 * 60 * 60 * 1000,
      httpOnly: true,
    });
    res.status(200).send({ status: "OK", data: newUser });
  } catch (error) {
    res.status(error?.status || 500).send({
      status: "FAILED",
      data: { error: error?.message || error },
    });
  }
};

const login = async (req, res) => {
  try {
  } catch (error) {}
};

const logout = async (req, res) => {
  try {
  } catch (error) {}
};

const refresh = async (req, res) => {
  try {
    res.json("123");
  } catch (error) {}
};

module.exports = {
  registration,
  login,
  logout,
  refresh,
};
