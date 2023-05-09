const express = require('express');
const router = express.Router();
const validator = require('../middleware/validator');
const bookController = require('../controller/book.controller');
const logger = require('../logger/api.logger');

router.post('/', validator('book'), (req, res, next) => {
     logger.info('create book', req.body);
     bookController.createBook(req.body).then(data => res.json(data));
});

router.put('/', validator('book'), (req, res, next) => {
     logger.info('update book', req.body);
     bookController.updateBook(req.body).then(data => res.json(data));
});

router.get('/:id', (req, res, next) => {
    bookController.getBook(parseInt(req.params.id)).then(data => res.json(data));
});

router.delete('/:id', (req, res) => {
    bookController.deleteBook(parseInt(req.params.id)).then(data => res.json(data));
});

module.exports = router;