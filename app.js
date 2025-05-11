const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const session = require('express-session');

const app = express();
const port = 3000;

// =======================
// Middleware & View Setup
// =======================
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

// EJS setup
app.set('view engine', 'ejs');

// Session setup
app.use(session({
  secret: 'library_secret',
  resave: false,
  saveUninitialized: true
}));

// ==============================
// ✅ Middleware Import Goes Here
// ==============================
const { ensureAuthenticated, ensureRole } = require('./middleware/auth');

// ==========================
// Routes
// ==========================
const authRoutes = require('./routes/authRoutes');
const bookRoutes = require('./routes/bookRoutes');

// Public auth routes
app.use('/', authRoutes);

// Protect book routes (require login)
app.use('/books', ensureAuthenticated, bookRoutes);

// ==========================
// Home Route
// ==========================
app.get('/', (req, res) => {
  res.redirect('/books');
});

// ==========================
// Start the Server
// ==========================
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
