const create = require('./create');
const login = require('./login');
const book = require('./book');
const userrecord = require('./userrecord');
const usersearch = require('./usersearch');
const postLoginStep = require('./postLoginStep');
const creexe_req = require('./Commands/creexec_req');
const credialog_req = require('./Commands/credialog_req');
const pergridget_req = require('./Commands/pergridget_req');
const { personQuery, articleQuery, vehicleQuery, locationQuery } = require('./Commands/informer_query');

module.exports = {
    create,
    login,
    book,
    userrecord,
    usersearch,
    postLoginStep,
    creexe_req,
    credialog_req,
    pergridget_req,
    personQuery,
    articleQuery,
    vehicleQuery,
    locationQuery
}
