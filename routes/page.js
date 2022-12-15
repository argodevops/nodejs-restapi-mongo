const express = require('express');
const router = express.Router();
const bookController = require('../controller/book.controller');
router.get('/:title', (req, res, next) => {
    bookController.getPage(req.params.title).then(data => res.json(data));
});
module.exports = router;