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

module.exports = { crossref, agencyevents, agencyusergrps, calltaker, events, evtysreses };