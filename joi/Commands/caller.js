const joi = require('joi');

const location = joi.object().keys({
    Longitude: joi.number().optional(),
    Latitude: joi.number().optional(),
    State: joi.string().optional().allow(null),
    ZipCode: joi.string().optional().allow(null),
    StreetAddress: joi.string().required()
});

const callsource = joi.object().keys({
    ExternalSourceID: joi.string().required()
});

const shortCaller = joi.object().keys({
    Name: joi.string().required(),
    PhoneNumber: joi.string().required(),
    Location: location,
    CallSourceCallerID: joi.string().optional()
});

const call = joi.object().keys({
    Callees: joi.array().required(),
    CallMessages: joi.array().required(),
    Caller: shortCaller,
    CallSource: callsource
});

const savecaller = joi.object().keys({
    Call: call
});

const callerhist = joi.object().keys({
    Caller: shortCaller,
    Source: joi.string().required(),
    Save: joi.boolean().required()
});
const additInfo = joi.object();
const cust_data = joi.object().keys({
    CallerDoB: joi.string().required(),
    CallerAnonymous: joi.string().required(),
    CallerType: joi.string().required(),
    CallerHomePhone: joi.string().required(),
    CallerPreferredContact: joi.string().required(),
    AutomaticContactMethod: joi.string().required(),
    loc: joi.string().required(),
    lon: joi.number().required(),
    lat: joi.number().required()
});

const caller = joi.object().keys({
    addr: joi.string().required(),
    name: joi.string().required(),
    num: joi.string().required(),
    source: joi.string().required(),
    lat: joi.number().required(),
    lon: joi.number().required(),
    additionalInfo: additInfo,
    custom_data: cust_data,
    calltakerCallId: joi.string()
});

const addcaller = joi.object().keys({
    parameters: joi.array().items(caller).length(1),
    eventId: joi.string().required()
});

module.exports = { savecaller, callerhist, addcaller };