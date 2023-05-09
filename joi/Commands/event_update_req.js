const joi = require('joi');

const customData = joi.object().keys({
    AgencyEventCustom2: joi.string().required()
});
const locProps = joi.object().keys({
    loc: joi.string().required(),
    conf: joi.number().required(),
    match: joi.string().required(),
    addrtyp: joi.number().required(),
    lat: joi.number().required(),
    lon: joi.number().required(),
    drlat: joi.number().required(),
    drlon: joi.number().required(),
    esz: joi.number().required(),
    locationVerifiedTime: joi.string().required(),
    providerName: joi.string().required(),
    providerResponse: joi.string().required()
}).unknown();



module.exports = creev_req_schema;