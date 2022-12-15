const express = require('express');
const router = express.Router();
const validator = require('../middleware/validator');
const logger = require('../logger/api.logger');

router.post('/api/Commands/1.0.0/CAD_CREATE_USER_REQ', validator('userrecord'), (req, res) => {
    logger.info('Create User Req');
    logger.info(JSON.stringify(req.cookies.sessionId));
    logger.info(JSON.stringify(req.body));
    res.status(200).send('Ok');
});

router.post('/api/Commands/1.0.0/CAD_EDIT_USER_REQ', validator('userrecord'), (req, res) => {
    logger.info('Edit User Req');
    logger.info(JSON.stringify(req.body));
    res.status(200).send('Ok');
});

router.post('/api/Commands/1.0.0/CAD_GET_ALL_USER_DETAILS_REQ', validator('usersearch'), (req, res) => {
    logger.info('Search User Req');
    logger.info(JSON.stringify(req.body));
    res.status(200).send('Ok');
});

router.post('/Account/SetLocale', (req, res) => {
    logger.info(`Received locale POST of ${req.body}`);
    res.status(200).send('Ok');
})

router.post('/', validator('postLoginStep'), (req, res) => {
    logger.info('Posted to base url, setting sessionId on return');
    logger.info(JSON.stringify(req.body));
    res.cookie('sessionId', 'abc123abc123');
    res.status(200).send('Ok');
})


router.get('/', (req, res) => {
    const resp = "Oncall Root Path";
    res.status(200).send(resp);
});


module.exports = router;