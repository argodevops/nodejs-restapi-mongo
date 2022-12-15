const joi = require('joi');
const postLoginStep = joi.object().keys({
    code: joi.string().required(),
    id_token: joi.string().required(),
    scope: joi.string().required(),
    state: joi.string().required(),
    session_state: joi.string().required()
});

module.exports = postLoginStep;