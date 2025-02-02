const User = require('../models/User');
const { generateToken } = require('../utils/auth');
const passport = require('passport');

const authController = {
  signup: async (req, res) => {
    try {
      const { name, email, password, facebookLink } = req.body;
      
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        return res.status(400).json({ error: 'Email already registered' });
      }

      const user = new User({ name, email, password, facebookLink });
      await user.save();

      const token = generateToken(user);
      res.cookie('token', token, { httpOnly: true });
      
      res.status(201).json({ user: user.toJSON() });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  login: async (req, res) => {
    try {
      const { email, password } = req.body;
      const user = await User.findByCredentials(email, password);
      const token = generateToken(user);
      
      res.cookie('token', token, { httpOnly: true });
      res.json({ user: user.toJSON() });
    } catch (error) {
      res.status(401).json({ error: 'Invalid credentials' });
    }
  },

  logout: async (req, res) => {
    try {
      res.clearCookie('token');
      res.json({ message: 'Logged out successfully' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  checkAuth: async (req, res) => {
    try {
      if (!req.user) {
        return res.json({ isAuthenticated: false });
      }
      res.json({ isAuthenticated: true, user: req.user.toJSON() });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
};

module.exports = authController;