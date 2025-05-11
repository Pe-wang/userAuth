let books = []; // Temporary storage
let idCounter = 1;

exports.listBooks = (req, res) => {
  res.render('books', { books });
};

exports.showAddForm = (req, res) => {
  res.render('addBook');
};

exports.addBook = (req, res) => {
  const { title, author } = req.body;
  books.push({ id: idCounter++, title, author, status: 'Available' });
  res.redirect('/books');
};

exports.showEditForm = (req, res) => {
  const book = books.find(b => b.id == req.params.id);
  res.render('editBook', { book });
};

exports.updateBook = (req, res) => {
  const { title, author } = req.body;
  const book = books.find(b => b.id == req.params.id);
  if (book) {
    book.title = title;
    book.author = author;
  }
  res.redirect('/books');
};

exports.deleteBook = (req, res) => {
  books = books.filter(b => b.id != req.params.id);
  res.redirect('/books');
};
