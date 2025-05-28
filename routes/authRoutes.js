const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

<<<<<<< HEAD
router.get('/login', authController.showLogin);
router.post('/login', authController.login);

router.get('/signup', authController.showSignup);
router.post('/signup', authController.signup);

router.get('/logout', authController.logout);
=======

// root route
router.get('/', (req, res) => {
  res.render('pages/landing');
});


// Signup
router.get('/signup', authController.getSignup);
router.post('/signup', authController.postSignup);


// Email verification
router.get('/verify-email', authController.verifyEmail);


// Login
router.get('/login', authController.getLogin);
router.post('/login', authController.postLogin);


// Forgot and reset password routes
router.get('/forgot-password', authController.getForgotPassword);
router.post('/forgot-password', authController.forgotPassword);
router.get('/reset-password', authController.getResetPassword);
router.post('/reset-password', authController.resetPassword);

>>>>>>> 8e39c56 (Practical 1)

module.exports = router;
