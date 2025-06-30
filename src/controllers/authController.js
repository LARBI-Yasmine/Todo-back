const authService = require("../services/authService");

class AuthController {
  async register(req, res) {
    try {
      const { nom, email, password, role } = req.body;
      const result = await authService.register({ nom, email, password, role });
      if (result.error) {
        return res.status(400).json({ message: result.message });
      }
      res.status(201).json(result);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  // Login (Connexion)
  async login(req, res) {
    try {
      const { email, password } = req.body;
      const result = await authService.login(email, password, res);
      res.status(201).json(result);
    } catch (error) {
      res.status(401).json({ error: error.message });
    }
  }

  async logout(req, res) {
    try {
      const result = await authService.logout(req, res);
      res.json(result);
    } catch (error) {
      res.status(500).json({ message: "Erreur lors de la déconnexion." });
    }
  }
}
module.exports = new AuthController();
