const joi = require('joi');

const personSharedProps = joi.object().keys({
    lastName: joi.string().required(),
    firstName: joi.string().required(),
    phoneNumber: joi.string(),
    raceCode: joi.string(),
    NCICNumber: joi.string(),
    height: joi.number(),
    sexCode: joi.string().length(1)
});
const personProps = joi.object().keys({
    personSharedProperties: personSharedProps
});

const vehicleSharedProps = joi.object().keys({
    vehicleMakeCode: joi.string().required(),
    vehicleModelCode: joi.string(),
    vehicleColorCode: joi.string(),
    licensePlateNumber: joi.string().required()
});
const vehicleQueryProps = joi.object().keys({
    reasonCode: joi.string().required()
});
const vehicleProps = joi.object().keys({
   vehicleSharedProperties: vehicleSharedProps,
   vehicleQueryProperties: vehicleQueryProps
});

const articleSharedProps = joi.object().keys({
    articleSerialNumber: joi.string().required()
});
const articleQueryProps = joi.object().keys({
    requestor: joi.string().required(),
    ownerAppliedNumber: joi.string()
});
const articleProps = joi.object().keys({
    articleQueryProperties: articleQueryProps,
    articleSharedProperties: articleSharedProps
});

const locationSharedProps = joi.object().keys({
    city: joi.string().required(),
    streetAddress: joi.string().required(),
    recordNumber: joi.string(),
    state: joi.string()
});
const locationProps = joi.object().keys({
    locationSharedProperties: locationSharedProps
});
const locationQuery = joi.object().keys({
     providers: joi.array().items(joi.string().valid("PNC", "POLEStore", "VotersRegistration")),
     location: locationProps
 });

const personQuery = joi.object().keys({
    providers: joi.array().items(joi.string().valid("PNC", "POLEStore", "VotersRegistration")),
    person: personProps
});

const articleQuery = joi.object().keys({
     providers: joi.array().items(joi.string().valid("PNC", "POLEStore", "VotersRegistration")),
     article: articleProps
});

const vehicleQuery = joi.object().keys({
     providers: joi.array().items(joi.string().valid("PNC", "POLEStore", "VotersRegistration")),
     vehicle: vehicleProps
});

module.exports = { personQuery, articleQuery, vehicleQuery, locationQuery };