const express = require('express');
const router = express.Router();
const validator = require('../middleware/validator');
const bookController = require('../controller/book.controller');

router.get('/', (req, res, next) => {
    bookController.getBooks().then(data => res.json(data));
});

router.get('/:author', (req, res, next) => {
    bookController.getBooksByAuthor(req.params.author).then(data => res.json(data));
});


module.exports = router;