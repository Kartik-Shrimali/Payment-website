const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("./routes/config");

function authMiddleware(req, res, next) {
  const authHeader = req.headers.authorization;


  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ msg: "Unauthorized" });
  }

  const token = authHeader.split(" ")[1];


  try {
    const decoded = jwt.verify(token, JWT_SECRET);


    if (decoded.userId) {
      req.userId = decoded.userId;
      next();
    } else {

      return res.status(403).json({ msg: "Unauthorized access" });
    }
  } catch (err) {

    return res.status(403).json({ msg: "Unauthorized access" });
  }
}

module.exports = {
  authMiddleware
}