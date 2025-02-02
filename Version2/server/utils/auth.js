const jwt = require('jsonwebtoken');

const generateToken = (user) => {
  return jwt.sign(
    { _id: user._id.toString() },
    process.env.JWT_SECRET,
    { expiresIn: '7d' }
  );
};

module.exports = { generateToken };