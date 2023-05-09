const joi = require('joi');
const { mLoc } = require('../location');

const customData = joi.object().required();

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

const createevent = joi.object().keys({
    deplo: joi.array().required(),
    com: joi.array().required(),
    suppl: joi.array().required(),
    attachments: joi.array().required(),
    location: locProps,
    tycod: joi.string().required(),
    sub_tycod: joi.string().required(),
    alarmlevel: joi.number().optional(),
    description: joi.string().optional(),
    evdesc: joi.string().required(),
    custom_data: customData
});

const updateevent = joi.object().keys({
    eventNum: joi.string().required(),
    location: mLoc,
    tycod: joi.string().required(),
    sub_tycod: joi.string().required(),
    alarmlevel: joi.number().optional(),
    description: joi.string().optional(),
    custom_data: customData,
    priority: joi.number().required(),
    beat: joi.string().required(),
    sub_status: joi.number().required()
});

const nearbyevent = joi.object().keys({
    closed: joi.boolean().required(),
    lat: joi.string().required(),
    lon: joi.string().required(),
    tycod: joi.string().allow('').required()
});

const getevty = joi.object().keys({
    agencyEventSubtypeCode: joi.string().required(),
    agencyEventTypeCode: joi.string().required(),
    agencyId: joi.string().required()
});

const aliaseventtypes = joi.object().keys({
    typeCode: joi.string().required(),
    subtypeCode: joi.string().allow('').required()
});

const geteventreq = joi.object().keys({
    agencyEventId: joi.string().required(),
    isClosed: joi.boolean().required(),
    offlineOptions: joi.object().required()
});

const evrtp = joi.object().keys({
    eventid: joi.string().required(),
    calls: joi.number().required(),
    offlineOptions: joi.object().required()
});

module.exports = { createevent, updateevent, nearbyevent, getevty, aliaseventtypes, geteventreq, evrtp };