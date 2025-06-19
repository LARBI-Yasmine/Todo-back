const mongoose = require("mongoose");

const TacheSchema = new mongoose.Schema({
  title: { type: String, required: true },
  type: {
    type: String,
    enum: ["à faire", "en cours", "terminée"],
    required: true,
  },
  description: { type: String },
  difficulte: {
    type: String,
    enum: ["faible", "moyen", "difficile"],
    required: true,
  },
  estimation: { type: Number, required: true }, // en nombre de jours
  date: { type: Date, required: true },
});

module.exports = mongoose.model("tache", TacheSchema);
