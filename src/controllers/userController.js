const UserService = require("../services/userService");

class UserController {
  //récupérer tous les utilisateurs
  async getAllUsers(req, res) {
    try {
      const users = await UserService.getAllUsers();
      res.json(users);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }

  //récuperer un utilisateur par son ID
  async getUserById(req, res) {
    try {
      const user = await UserService.getUserById(req.params.id);
      res.json(user);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }

  //mettre à jour les données d'un utilisateur
  async updateUser(req, res) {
    try {
      const user = await UserService.updateUser(req.params.id, req.body);
      res.json(user);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }

  //supprimer un utilisateur
  async deleteUser(req, res) {
    try {
      const user = await UserService.deleteUser(req.params.id);
      res.json(user);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }
}

module.exports = new UserController();
