const express = require('express');
const router = express.Router();
const validator = require('../middleware/validator');
const userController = require('../controller/user.controller');

router.post('/', (req, res, next) => {
     userController.logoutUser(req.query.user, req.query.token).then(data => res.json(data));
});

module.exports = router;