const joi = require('joi');

const creexe_req_schema = joi.object().keys({
    args: joi.array().required(),
    agencyEventId: joi.array().required(),
    unitId: joi.array().required(),
    ruleString: joi.string().required()
});

module.exports = creexe_req_schema;