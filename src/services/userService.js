const User = require("../models/user");

class UserService {
  //récupérer tous les utilisateurs
  async getAllUsers() {
    try {
      return await User.find();
    } catch (err) {
      throw new Error(err.message);
    }
  }

  //récuperer un utilisateur par son ID
  async getUserById(id) {
    try {
      return await User.findById(id);
    } catch (err) {
      throw new Error(err.message);
    }
  }

  //mettre à jour les données d'un utilisateur
  async updateUser(id, data) {
    try {
      const user = await User.findById(id);
      if (user) {
        Object.assign(user, data); // met à jour les champs existants
        return await user.save(); // enregistre les modifications
      }
      return null;
    } catch (err) {
      throw new Error(err.message);
    }
  }

  //supprimer un utilisateur
  async deleteUser(id) {
    try {
      const deletedUser = await User.findByIdAndDelete(id);
    } catch (err) {
      throw new Error(err.message);
    }
  }
}

module.exports = new UserService();
