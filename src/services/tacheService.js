const Tache = require("../models/tache");

class TacheService {
  async getAllTaches() {
    return await Tache.find();
  }

  async getTacheById(id) {
    return await Tache.findById(id);
  }

  async createTache(data) {
    const { title, type, description, difficulte, estimation, date } = data;
    const tache = new Tache({
      title,
      type,
      description,
      difficulte,
      estimation,
      date,
    });
    return await tache.save();
  }

  async updateTache(id, donnees) {
    const tache = await Tache.findById(id);
    if (!tache) throw new Error("Tâche introuvable");

    tache.title = donnees.title;
    tache.type = donnees.type;
    tache.description = donnees.description;
    tache.difficulte = donnees.difficulte;
    tache.estimation = donnees.estimation;
    tache.date = donnees.date;

    return await tache.save();
  }

  async deleteTache(id) {
    return await Tache.findByIdAndDelete(id);
  }
}

module.exports = new TacheService();
