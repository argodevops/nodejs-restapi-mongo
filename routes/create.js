const express = require('express');
const router = express.Router();
const validator = require('../middleware/validator');

router.post('/', validator('create'), (req, res, next) => {
     res.json(data);
});

module.exports = router;