const Tache = require("../models/Tache");

class TacheService {
  async getAllTaches() {
    return await Tache.find();
  }

  async getTacheById(id) {
    return await Tache.findById(id);
  }

  async createTache(data) {
    const { title, date } = data;
    const tache = new Tache({ title, date });
    return await tache.save();
  }

  async toggleTacheCompletion(id) {
    const tache = await Tache.findById(id);
    if (!tache) throw new Error("Tache not found");
    tache.completed = !tache.completed;
    return await tache.save();
  }

  async deleteTache(id) {
    return await Tache.findByIdAndDelete(id);
  }
}

module.exports = new TacheService();
