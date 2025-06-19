const TacheService = require("../services/tacheService");

class TacheController {
  // Récupérer toutes les tâches
  async getAllTaches(req, res) {
    try {
      const taches = await TacheService.getAllTaches();
      res.json(taches);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }

  // Récupérer une tâche par ID
  async getTacheById(req, res) {
    try {
      const tache = await TacheService.getTacheById(req.params.id);
      if (!tache) return res.status(404).json({ message: "Task not found" });
      res.json(tache);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }

  // Créer une tâche
  async createTache(req, res) {
    try {
      const tache = await TacheService.createTache(req.body);
      res.status(201).json(tache);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  }

  // update tache
  async updateTache(req, res) {
    try {
      const tache = await TacheService.updateTache(req.params.id, req.body);
      res.status(200).json(tache);
    } catch (error) {
      res.status(400).json({
        message: "Erreur lors de la mise à jour",
        error: error.message,
      });
    }
  }

  // Supprimer une tâche
  async deleteTache(req, res) {
    try {
      const result = await TacheService.deleteTache(req.params.id);
      if (!result) return res.status(404).json({ message: "Task not found" });
      res.json({ message: "Task deleted" });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }
}

module.exports = new TacheController();
