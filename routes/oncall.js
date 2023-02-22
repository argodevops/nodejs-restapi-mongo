const express = require('express');
const router = express.Router();
const validator = require('../middleware/validator');
const logger = require('../logger/api.logger');
// pro forma of user record, used for response of createUser.
const userData = {
     "id": 1123333,
     "fname": "Mikedd",
     "mname": null,
     "lname": "Gddd",
     "username": "mikegqq23",
     "ag": "MPS",
     "defaultGrp": 10301,
     "address": null,
     "email": null,
     "parentId": 0,
     "password": null,
     "city": null,
     "state": null,
     "unitid": null,
     "pagerid": null,
     "stationid": [],
     "passwordvalidity": 1,
     "passwordnotify": 1,
     "phone": null,
     "avatar": "",
     "domain": null,
     "bloodType": null,
     "alphanumericEmpId": null,
     "emergencyname": null,
     "emergencyaddress": null,
     "emergencyphone": null,
     "emergencycity": null,
     "emergencystate": null,
     "active": true,
     "customData": {}
 };

const searchResponse = {
     "body": {
       "users": [
        {
         "id": 1123333,
         "fname": "Test1",
         "lname": "Test2",
         "username": "Test1Test2",
         "ag": "MPS",
         "defaultGrp": 10301,
         "avatar": ""
        }
       ]
      }
};

router.post('/api/Commands/1.0.0/CAD_CREATE_USER_REQ', validator('userrecord'), (req, res) => {
    logger.info('Create User Req');
   // logger.info(JSON.stringify(req.cookies.sessionId));
  //  logger.info(JSON.stringify(req.body));
    const data = req.body;
    const user = { ...userData, ...data }; // overwrite pro-forma with data sent down.
    res.status(200).json({ body: { user } });
});

router.post('/api/Commands/1.0.0/CAD_EDIT_USER_REQ', validator('userrecord'), (req, res) => {
    logger.info('Edit User Req');
   // logger.info(JSON.stringify(req.body));
    const user = { ...req.body };
    res.status(200).json({ body: { user }});
});

router.post('/api/Commands/1.0.0/CAD_GET_ALL_USER_DETAILS_REQ', validator('usersearch'), (req, res) => {
    logger.info('Search User Req');
  //  logger.info(JSON.stringify(req.body));
    res.status(200).json(searchResponse);
});

router.post('/Account/SetLocale', (req, res) => {
    logger.info(`Received locale POST of ${req.body}`);
    res.status(200).send('Ok');
})

router.post('/', validator('postLoginStep'), (req, res) => {
    logger.info('Posted to base url, setting sessionId on return');
  //  logger.info(JSON.stringify(req.body));
    res.cookie('sessionId', 'abc123abc123');
    res.status(200).send('Ok');
})


router.get('/', (req, res) => {
    const resp = "Oncall Root Path";
    res.status(200).send(resp);
});

// Related to BUS TRAFFIC
router.get('/api/Commands/GetCurrentSessionUserGroupId', (req, res) => {
    res.status(200).send("10009"); // just return a value.
});

const bodyA = {
               "args": [],
               "agencyEventId": [],
               "unitId": [],
               "ruleString": "CreWidget:ExternalWebSites"
              };

const CREEXEC_REQ = require('../responses/commands/CREEXEC_REQ');
router.post('/api/Commands/1.0.0/CREEXEC_REQ', validator('creexe_req'),  (req, res) => {
    // console.log(JSON.stringify(req.body));
    res.status(200).json(CREEXEC_REQ);
});

const CREDIALOG_REQ = require('../responses/commands/CREDIALOG_REQ');
router.post('/api/Commands/1.0.0/CREDIALOG_REQ', validator('credialog_req'), (req, res) => {
    // console.log(JSON.stringify(req.body));
    res.status(200).json(CREDIALOG_REQ);
});

router.post('/api/LocalizedStrings/RequestStrings', (req, res) => {
    logger.info(req.body);
    res.status(200).send([{"key": "TEXT_KEY","value": "TEXT VALUE X"}]);
});

router.get('/Partials/dialogRunCmdButton', (req, res) => {
    res.set('Content-Type', 'text/html');
    res.send(Buffer.from('<div>Button stuff</div>'));
});

const PERSISTENT_GRID_GET_REQ = require('../responses/commands/PERSISTENT_GRID_GET_REQ');
router.post('/api/Commands/1.0.0/PERSISTENT_GRID_GET_REQ', (req, res) => {
    res.status(200).json(PERSISTENT_GRID_GET_REQ);
});

router.post('/api/Commands/1.0.1/INFORMER_QUERY_PERSON_REQ', validator('personQuery'), (req, res) => {
    res.status(200).json("Person Query OK");
});

router.post('/api/Commands/1.0.1/INFORMER_QUERY_VEHICLE_REQ', validator('vehicleQuery'), (req, res) => {
    res.status(200).json("vehicle Query OK");
});

router.post('/api/Commands/1.0.0/INFORMER_QUERY_ARTICLE_REQ', validator('articleQuery'), (req, res) => {
    res.status(200).json("article Query OK");
});

router.post('/api/Commands/1.0.1/INFORMER_QUERY_LOCATION_REQ', validator('locationQuery'), (req, res) => {
    res.status(200).json("location Query OK");
});

module.exports = router;