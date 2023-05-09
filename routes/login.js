const express = require('express');
const router = express.Router();
const validator = require('../middleware/validator');
const userController = require('../controller/user.controller');

router.post('/', validator('login'), (req, res, next) => {
    const { __RequestVerificationToken, username, password, returnUrl } = req.body;
    userController.loginUser(username, password, __RequestVerificationToken).then(data => res.json(data));
});

module.exports = router;