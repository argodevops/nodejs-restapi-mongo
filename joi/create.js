const joi = require('joi');

const createSchema = joi.object().keys({
    lat: joi.number().required(),
    lon: joi.number().required(),
    evtype: joi.string().max(4).required(),
    evsubtype: joi.string().max(5),
    esz: joi.number(),
    alarm: joi.number(),
    filter: joi.number()
});

module.exports = createSchema;