const express = require("express");
const router = express.Router();
const verifyToken = require("../middleware/auth");
const TacheController = require("../controllers/tacheController");

// GET toutes les tâches
router.get("/taches", TacheController.getAllTaches);

// GET une tâche par ID (optionnel)
router.get("/taches/:id", TacheController.getTacheById);

// POST nouvelle tâche
router.post("/taches", TacheController.createTache);

// PUT une tache
router.put("/taches/:id", TacheController.updateTache);

// DELETE une tâche
router.delete("/taches/:id", TacheController.deleteTache);

module.exports = router;
