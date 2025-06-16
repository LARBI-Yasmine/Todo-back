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

  // Basculer l'état "completed"
  async toggleTache(req, res) {
    try {
      const tache = await TacheService.toggleTacheCompletion(req.params.id);
      res.json(tache);
    } catch (err) {
      res.status(404).json({ message: err.message });
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
