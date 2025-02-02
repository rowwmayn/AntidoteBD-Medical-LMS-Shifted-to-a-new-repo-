// backend/middleware/auth.js
import jwt from "jsonwebtoken";

export const protect = (req, res, next) => {
  let token;

  // Check for token in Authorization header ("Bearer <token>")
  if (req.headers.authorization && req.headers.authorization.startsWith("Bearer ")) {
    try {
      token = req.headers.authorization.split(" ")[1];
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      // Attach decoded user payload (e.g., id, role) to request object
      req.user = decoded;
      next();
    } catch (error) {
      return res.status(401).json({ message: "Not authorized, token failed" });
    }
  }

  if (!token) {
    return res.status(401).json({ message: "Not authorized, no token" });
  }
};
