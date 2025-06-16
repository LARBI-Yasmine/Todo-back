// Importation des modules
const express = require("express");

// Initialisation de l'application
const router = express.Router();

/*
 * -----------------------------------------------------------------------------------
 * Définition des routes
 * -----------------------------------------------------------------------------------
 */
router.get("/", async (req, res) => {
  try {
    res.json({
      message: "Bienvenue sur l'API to do tache",
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
