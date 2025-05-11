const express = require('express');
const router = express.Router();
const bookController = require('../controllers/bookController');

// Show all books
router.get('/', bookController.listBooks);

// Show form to add a book
router.get('/add', bookController.showAddForm);

// Handle book creation
router.post('/add', bookController.addBook);

// Show form to edit book
router.get('/edit/:id', bookController.showEditForm);

// Handle book update
router.post('/edit/:id', bookController.updateBook);

// Delete a book
router.post('/delete/:id', bookController.deleteBook);

module.exports = router;
