const express = require("express");
const verifyToken = require("../middleware/auth");

const router = express.Router();

const AuthController = require("../controllers/authController");

router.post("/register", AuthController.register);

router.post("/login", AuthController.login);

//router.get("/profile", verifyToken, AuthController.profile);

router.post("/logout", verifyToken, AuthController.logout);

// Exportation du module
module.exports = router;
