const express = require("express");
const router = express.Router();
const verifyToken = require("../middleware/auth");
const TacheController = require("../controllers/tacheController");

// GET toutes les tâches
router.get("/taches", verifyToken, TacheController.getAllTaches);

// GET une tâche par ID (optionnel)
router.get("/taches/:id", verifyToken, TacheController.getTacheById);

// POST nouvelle tâche
router.post("/taches", verifyToken, TacheController.createTache);

// PUT une tache
router.put("/taches/:id", verifyToken, TacheController.updateTache);

// DELETE une tâche
router.delete("/taches/:id", verifyToken, TacheController.deleteTache);

module.exports = router;
