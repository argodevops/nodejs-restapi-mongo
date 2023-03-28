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

const loisearch = joi.object().keys({
    searchTypes: joi.array().required(),
    searchAreaGml: joi.string().required(),
    searchRange: joi.number().required()
});

const mLoc = joi.object().keys({
    loc: joi.string().required(),
    conf: joi.number().required(),
    match: joi.string().required(),
    addrtyp: joi.number().required(),
    lat: joi.number().required(),
    lon: joi.number().required(),
    drlat: joi.number().required(),
    drlon: joi.number().required(),
    num: joi.string().allow(null).allow('').required(),
    AddNumFrom: joi.string().allow(null).allow('').required(),
    AddNumTo:joi.string().allow(null).allow('').required(),
    dirpre:joi.string().allow(null).allow('').required(),
    feanme:joi.string().allow(null).allow('').required(),
    featyp:joi.string().allow(null).allow('').required(),
    dirsuf:joi.string().allow(null).allow('').required(),
    mun:joi.string().allow(null).allow('').required(),
    area:joi.string().allow(null).allow('').required(),
    apt:joi.string().allow(null).allow('').required(),
    bldg:joi.string().allow(null).allow('').required(),
    locfld1:joi.string().allow(null).allow('').required(),
    locfld2:joi.string().allow(null).allow('').required(),
    locfld3:joi.string().allow(null).allow('').required(),
    locfld4:joi.string().allow(null).allow('').required(),
    zip:joi.string().allow(null).allow('').required(),
    xst1:joi.string().allow(null).allow('').required(),
    xst2:joi.string().allow(null).allow('').required(),
    cmt:joi.string().allow(null).required(),
    addrid: joi.string().allow(null).allow('').required(),
    esz: joi.number().required(),
    providerToken:joi.string().allow(null).allow('').required(),
    fromAniAli:joi.boolean().required(),
    providerName:joi.string().allow(null).allow('').required(),
    locationVerifiedTime:joi.string().allow(null).allow('').required(),
    locationType:joi.string().allow(null).allow('').required(),
    placeName:joi.string().allow(null).allow('').required(),
    state:joi.string().allow(null).allow('').required(),
    unitType:joi.string().allow(null).allow('').required(),
    layerName:joi.string().allow(null).allow('').required(),
    providerResponse:joi.string().allow(null).allow('').required()
});

const spladdr = joi.object().keys({
    matchLocation: mLoc
});

const location = joi.object().keys({
    StreetAddress: joi.string().required(),
    Latitude: joi.number().required(),
    Longitude: joi.number().required()
});

const locationhist = joi.object().keys({
    Location: location,
    Source: joi.string().required()
});

module.exports = { locationSchema, geoSchema, spladdr, loisearch, locationhist, mLoc };