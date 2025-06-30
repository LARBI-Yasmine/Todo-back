const express = require("express");
const router = express.Router();
const verifyToken = require("../middleware/auth");
const UserController = require("../controllers/userController");

router.get("/users", verifyToken, UserController.getAllUsers);

router.get("/users/:id", verifyToken, UserController.getUserById);

router.put("/users/:id", verifyToken, UserController.updateUser);

router.delete("/users/:id", verifyToken, UserController.deleteUser);

module.exports = router;
