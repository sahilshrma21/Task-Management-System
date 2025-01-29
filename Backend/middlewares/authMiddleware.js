import jwt from "jsonwebtoken";

const authMiddleware = (req, res, next) => {
  const token = req.header("Authorization")?.split(" ")[1];

  if (!token) {
    return res.status(401).json({ error: "Access denied. No token provided." });
  }

  try {
<<<<<<< HEAD
    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
=======
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
>>>>>>> 11d2534 (with login page)
    req.user = decoded; // Add user info from the token to the request object
    next();
  } catch (error) {
    res.status(400).json({ error: "Invalid token." });
  }
};

export default authMiddleware;
