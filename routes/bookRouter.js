const { Router } = require('express');
const bookRouter = Router();

bookRouter.get('/', (req, res) => res.send('Books Home Page'));
bookRouter.get('/:bookId', (req, res) => {
  const { bookId } = req.params;
  res.send(`Book Details for ID: ${bookId}`);
});

module.exports = bookRouter;
