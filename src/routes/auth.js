const express = require("express");
const verifyToken = require("../middleware/auth");

// Initialisation de l'application
const router = express.Router();

// Importation du controller
const AuthController = require("../controllers/authController");

router.post("/register", AuthController.register);

router.post("/login", AuthController.login);

// Exportation du module
module.exports = router;
