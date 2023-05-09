const joi = require('joi');
const loginSchema = joi.object().keys({
    Shell: joi.string().required(),
    mapId: joi.string().required(),
    returnUrl: joi.string().required(),
    __RequestVerificationToken: joi.string().pattern(/^[A-Za-z0-9_-]+$/).required()
});

module.exports = loginSchema;