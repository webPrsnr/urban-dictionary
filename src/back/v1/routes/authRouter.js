const express = require("express");

const authController = require("../../controllers/authController");

const router = express.Router();

router.post("/registation", authController.registration);

router.post("/login", authController.login);

router.post("/logout", authController.logout);

router.get("/refresh", authController.refresh);

module.exports = router;
