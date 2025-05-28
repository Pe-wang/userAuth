const express = require('express');
const path = require('path');
<<<<<<< HEAD
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
=======
const cookieParser = require('cookie-parser');
const session = require('express-session');
require('dotenv').config();
const { createUserTable } = require('./models/userModel');


const app = express();
const PORT = process.env.PORT || 3000;


// Middlewares
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({
  secret: process.env.SESSION_SECRET || 'secretkey',
  resave: false,
  saveUninitialized: true,
}));


// View engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


// Routes
// const adminRoutes = require('./routes/adminRoutes');
const authRoutes = require('./routes/authRoutes');
// const userRoutes = require('./routes/userRoutes');
app.use('/', authRoutes);
// app.use('/', adminRoutes);
// app.use('/', userRoutes);


// Schema creation
createUserTable(); // Call this after setting up middlewares


// Server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
>>>>>>> 8e39c56 (Practical 1)
});
