const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const { auth } = require('../middleware/auth');
const passport = require('passport');

router.post('/signup', authController.signup);
router.post('/login', authController.login);
router.post('/logout', auth, authController.logout);
router.get('/check', auth, authController.checkAuth);

router.get('/facebook', passport.authenticate('facebook'));
router.get('/facebook/callback',
  passport.authenticate('facebook', { failureRedirect: '/login' }),
  (req, res) => {
    const token = generateToken(req.user);
    res.cookie('token', token, { httpOnly: true });
    res.redirect('/');
  }
);

module.exports = router;