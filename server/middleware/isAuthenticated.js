const jwt = require("jsonwebtoken");

const isAuthenticated = async (req, res, next) => {
  try {
    const token = req.cookies.token;

    if (!token) {
      return res.status(404).json({ message: "Token Not Found" });
    }

    const decodedToken = jwt.verify(token, process.env.JWT_TOKEN);

    if (!decodedToken) {
      return res.status(401).json({ message: "Unauthorized" });
    }
    req.userId = decodedToken.userId;
    next();
  } catch (error) {
    console.log("Error In Middleware : ", error);
  }
};

module.exports = isAuthenticated;
