const { users, createUser, findUser } = require('../models/userModel');

exports.showLogin = (req, res) => {
  res.render('login');
};

exports.showSignup = (req, res) => {
  res.render('signup');
};

exports.signup = (req, res) => {
  const { username, password, role } = req.body;
  if (findUser(username)) {
    return res.send("User already exists");
  }
  createUser(username, password, role);
  res.redirect('/login');
};

exports.login = (req, res) => {
  const { username, password } = req.body;
  const user = findUser(username);
  if (!user || user.password !== password) {
    return res.send("Invalid username or password");
  }
  req.session.user = user;
  res.redirect('/books');
};

exports.logout = (req, res) => {
  req.session.destroy();
  res.redirect('/login');
};
