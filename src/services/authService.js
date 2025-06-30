const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const User = require("../models/user");

const JWT_SECRET = process.env.JWT_SECRET;

class AuthService {
  async register({ nom, email, password, role }) {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      throw new Error("Cet email est déjà utilisé.");
    }

    const user = new User({ nom, email, password });
    await user.save();

    return { id: user._id, nom: user.nom, email: user.email, role: user.role };
  }

  async login(email, password, res) {
    const user = await User.findOne({ email });
    if (!user) {
      throw new Error("Email ou mot de passe incorrect.");
    }

    const isValid = await user.comparePassword(password);
    if (!isValid) {
      throw new Error("Email ou mot de passe incorrect.");
    }

    const token = jwt.sign({ id: user._id, role: user.role }, JWT_SECRET, {
      expiresIn: "1h",
    });

    return {
      message: "Connexion réussie.",
      token,
      user: {
        id: user._id,
        nom: user.nom,
        email: user.email,
        role: user.role,
      },
    };
  }

  async logout(req, res) {
    return { message: "Déconnexion réussie." };
  }
}

module.exports = new AuthService();
