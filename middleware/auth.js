// middleware/auth.js

function ensureAuthenticated(req, res, next) {
  if (!req.session.user) {
    return res.redirect('/login');
  }
  next();
}

function ensureRole(role) {
  return (req, res, next) => {
    if (!req.session.user || req.session.user.role !== role) {
      return res.status(403).send("Access denied.");
    }
    next();
  };
}

module.exports = {
  ensureAuthenticated,
  ensureRole
};
