const express = require("express");
const router = express.Router();
const TacheController = require("../controllers/tacheController");

// GET toutes les tâches
router.get("/taches", TacheController.getAllTaches);

// GET une tâche par ID (optionnel)
router.get("/taches/:id", TacheController.getTacheById);

// POST nouvelle tâche
router.post("/taches", TacheController.createTache);

// PUT toggle "completed"
router.put("/taches/:id", TacheController.toggleTache);

// DELETE une tâche
router.delete("/taches/:id", TacheController.deleteTache);

module.exports = router;
