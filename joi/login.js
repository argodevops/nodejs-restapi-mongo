const joi = require('joi');
const loginSchema = joi.object().keys({
    username: joi.string().required(),
    password: joi.string().required(),
    returnUrl: joi.string().required(),
    __RequestVerificationToken: joi.string().pattern(/^[A-Za-z0-9_-]+$/).required(),
    rememberLogin: joi.boolean()
});

module.exports = loginSchema;