const joi = require('joi');

const locProps = joi.object().keys({
    loc: joi.string().required()
});
const locationSchema = joi.object().keys({
    categories: joi.array().required(),
    suggest: joi.boolean().required(),
    loc: locProps
});

const geoSchema = joi.object().keys({
    lat: joi.number().required(),
    lon: joi.number().required(),
    forStorage: joi.boolean().required()
});

module.exports = { locationSchema, geoSchema };