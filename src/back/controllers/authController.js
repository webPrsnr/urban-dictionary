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
    const { body } = req;
    const userData = await authService.login(body.login, body.password);
    res.cookie("refreshToken", userData.tokens.refreshToken, {
      maxAge: 30 * 24 * 60 * 60 * 1000,
      httpOnly: true,
    });
    res.status(200).send({ status: "OK", data: userData });
  } catch (error) {
    res.status(error?.status || 500).send({
      status: "FAILED",
      data: { error: error?.message || error },
    });
  }
};

const logout = async (req, res) => {
  try {
    const { cookies } = req;
    const token = await authService.logout(cookies.refreshToken);
    res.clearCookie("refreshToken");
    res.status(200).send({ status: "OK" });
  } catch (error) {
    res.status(error?.status || 500).send({
      status: "FAILED",
      data: { error: error?.message || error },
    });
  }
};

const refresh = async (req, res) => {
  try {
    const { cookies } = req;
    const newUser = await authService.refresh(cookies.refreshToken);
    res.cookie("refreshToken", newUser.tokens.refreshToken, {
      maxAge: 30 * 24 * 60 * 60 * 1000,
      httpOnly: true,
    });
    res.status(200).send({ status: "OK", data: newUser });
  } catch (error) {
    console.error(error);
  }
};

module.exports = {
  registration,
  login,
  logout,
  refresh,
};
