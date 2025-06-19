const jwt = require("jsonwebtoken");

function verifyToken(req, res, next) {
  let token = req.header("Authorization");
  if (!token) return res.status(401).json({ error: "Accès refusé." });

  if (token.startsWith("Bearer ")) {
    token = token.slice(7);
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (err) {
    if (err.name === "TokenExpiredError") {
      return res
        .status(401)
        .json({ error: "Session expirée. Veuillez vous reconnecter." });
    }
    return res.status(401).json({ error: "Token invalide." });
  }
}

module.exports = verifyToken;
