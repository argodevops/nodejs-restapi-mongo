const create = require('./create');
const login = require('./login');
const logout = require('./logout');
const book = require('./book');
const { userrecord, usergroups } = require('./userrecord');
const { userSearchSchema, getUser } = require('./usersearch');
const postLoginStep = require('./postLoginStep');
const { createevent, updateevent, nearbyevent, getevty, aliaseventtypes, geteventreq, evrtp } = require('./Commands/events');
const credialog_req = require('./Commands/credialog_req');
const pergridget_req = require('./Commands/pergridget_req');
const { locationSchema, geoSchema, spladdr, loisearch, locationhist, generateroute } = require('./location');
const { personQuery, articleQuery, vehicleQuery, locationQuery } = require('./Commands/informer_query');
const { savecaller, callerhist, addcaller } = require('./Commands/caller');
const { crossref, agencyevents, agencyusergrps, calltaker, events, evtysreses, logEvents, table, eventids, eventid } = require('./Commands/misc');

module.exports = {
    create,
    login,
    logout,
    book,
    userrecord,
    userSearchSchema,
    postLoginStep,
    createevent,
    credialog_req,
    pergridget_req,
    personQuery,
    articleQuery,
    vehicleQuery,
    locationQuery,
    locationSchema,
    geoSchema,
    getUser,
    updateevent,
    spladdr,
    nearbyevent,
    loisearch,
    getevty,
    aliaseventtypes,
    savecaller,
    callerhist,
    locationhist,
    usergroups,
    addcaller,
    geteventreq,
    crossref,
    agencyevents,
    agencyusergrps,
    calltaker,
    evrtp,
    events,
    evtysreses,
    logEvents,
    table,
    eventids,
    eventid,
    generateroute
}
