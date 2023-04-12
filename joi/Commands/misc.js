const joi = require('joi');

const crossref = joi.object().keys({
    agencyEventId: joi.string().required(),
    commonEventId: joi.number().required()
});

const agencyevents = joi.object().keys({
    commonEventId: joi.number().required(),
    offlineOptions: joi.object().required()
});

const events = joi.object().keys({
    eventId: joi.string().required(),
    offlineOptions: joi.object().required()
});

const logEvents = joi.object().keys({
    eventId: joi.string().required(),
    commandName: joi.string().required(),
    commandParameters: joi.string().required(),
    offlineOptions: joi.object().required()
});

const agencyusergrps = joi.object().keys({
    agencyEventId: joi.string().required()
});

const calltaker = joi.object().keys({
    CalltakerId: joi.string().required()
});

const agencyEventType = joi.object().keys({
    agencyEventSubtypeCode: joi.string().required(),
    agencyEventTypeCode: joi.string().required(),
    agencyId: joi.string().required()
});

const evtysreses = joi.object().keys({
    agencyEventType: agencyEventType
});

const table = joi.object().keys({
    setName: joi.string().required(),
    tableName: joi.string().required()
});

const eventids = joi.object().keys({
    eventIds: joi.array().required()
});

const eventid = joi.object().keys({
    eventId: joi.string().required()
});

const oncallconfig = joi.object().keys({
    scope: joi.string().required(),
    itemType: joi.string().required(),
    itemSubType: joi.string().required(),
    cachePattern: joi.string().required(),
    itemData: joi.string().required()
});

module.exports = { crossref, agencyevents, agencyusergrps, calltaker, events, evtysreses, logEvents, table, eventids, eventid, oncallconfig };