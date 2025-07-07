const { Router } = require('express');
const { getAuthorById } = require('../controllers/authorController');
const authorRouter = Router();

authorRouter.get('/', (req, res) => res.send('Author Home Page'));
authorRouter.get('/:authorId', getAuthorById);

module.exports = authorRouter;
