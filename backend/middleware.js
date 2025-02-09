const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("./routes/config");

function authMiddleware(req, res, next) {
    const authHeader = req.headers.authorization;
    console.log("[DEBUG] Authorization Header:", authHeader); // Check if header is received
  
    if (!authHeader || !authHeader.startsWith("Bearer ")) { // ADD SPACE AFTER "Bearer"
      console.log("[DEBUG] Invalid/Missing Authorization Header");
      return res.status(401).json({ msg: "Unauthorized" });
    }
  
    const token = authHeader.split(" ")[1];
    console.log("[DEBUG] Extracted Token:", token); // Verify token extraction
  
    try {
      const decoded = jwt.verify(token, JWT_SECRET);
      console.log("[DEBUG] Decoded Token:", decoded); // Check decoded payload
  
      if (decoded.userId) {
        req.userId = decoded.userId;
        next();
      } else {
        console.log("[DEBUG] userId missing in token payload");
        return res.status(403).json({ msg: "Unauthorized access" });
      }
    } catch (err) {
      console.log("[DEBUG] JWT Verification Error:", err.message); // Log the actual error
      return res.status(403).json({ msg: "Unauthorized access" });
    }
  }

  module.exports = {
    authMiddleware
  }