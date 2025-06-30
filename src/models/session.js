const mongoose = require("mongoose");

const sessionSchema = new mongoose.Schema({
  utilisateurId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  dateConnexion: { type: Date, default: Date.now },
  dateDeconnexion: { type: Date, default: null },
  statut: { type: Boolean, default: true },
});

const Session = mongoose.model("Session", sessionSchema);

module.exports = Session;
