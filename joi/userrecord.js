const joi = require('joi');

const userRecordSchema = joi.object().keys({
    stationId: joi.array().required(),
    skills: joi.array().required(),
    devices: joi.array().required(),
    providerCredentials: joi.array().required(),
    isActive: joi.boolean().required(),
    passwordValidity: joi.number().required(),
    passwordNotify: joi.number().required(),
    id: joi.number().required(),
    fname: joi.string().required(),
    lname: joi.string().required(),
    username: joi.string().required(),
    password: joi.string().required(),
    confirmPassword: joi.string().required(),
    ag: joi.string().required(),
    defaultGrp: joi.number().required()
});

module.exports = userRecordSchema;