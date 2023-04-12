const express = require('express');
const router = express.Router();
const validator = require('../middleware/validator');
const logger = require('../logger/api.logger');
const createEv = require('../responses/commands/CAD_CREEV_REQ');
const evrtpReq = require('../responses/commands/CAD_EVRTP_REQ');
const getevent = require('../responses/commands/GETEVENT_REQ');
const locBody = require('../responses/commands/CAD_LV_REQ');
const GENERATE_ROUTES = require('../responses/commands/GENERATE_ROUTE');
const createRecord = require('../responses/commands/CAD_DEPLO_REQ');
const getByCommonEventId = require('../responses/commands/GETBYCOMMONEVENTID.js');
const logoutRedir1 = "/oncall.identity/connect/endsession?post_logout_redirect_uri=https%3A%2F%localhost:3000/oncall/&id_token_hint=TOKEN_STUFF&ui_locales=en-gb&x-client-SKU=ID_NET461&x-client-ver=6.8.0.0";
// pro forma of create record

const goecoderesp = require('../responses/commands/CAD_REVERSE_GEOCODING_MSG_REQ');

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
     "password": "abc123",
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

const updateEventResp = {
                         "mhdr": {
                          "id": "6205b5bf-7b5d-4847-ba0b-4b915102af08",
                          "format": "CAD_UPDATE_EVENT_RSP",
                          "ver": "1.0.0",
                          "sessionId": "d7cf5f92-4220-44cb-b507-b6f94b3facda",
                          "lang": null,
                          "langcfg": null,
                          "routing": {
                           "orig": "eventcmds-7c64b7c6b6-nbxhq.11024",
                           "dest": "website-69d688c8fb-xdbpn.11352",
                           "reply": null,
                           "host": null,
                           "ttl": "2023-02-24T15:05:00.0312351+00:00",
                           "rte": 1,
                           "proc": 2,
                           "subtime": "0001-01-01T00:00:00+00:00"
                          },
                          "response": {
                           "success": true,
                           "msgs": []
                          },
                          "allowAsync": false,
                          "utcOffset": 0,
                          "enableAudit": null
                         },
                         "body": {
                          "deplo_update": false
                         }
                        };



router.post('/api/Commands/1.0.0/CAD_DEPLO_REQ', validator('create'), (req,res) => {
    res.status(200).json(createRecord);
});

router.post('/api/Commands/1.0.0/CAD_REVERSE_GEOCODING_MSG_REQ', validator('geoSchema'), (req,res) => {
    res.status(200).json(goecoderesp);
});

router.post('/api/Commands/1.0.1/CAD_LV_REQ', validator('locationSchema'), (req,res) => {
    res.status(200).json(locBody);
});

router.post('/api/Commands/1.0.0/LOI_SEARCH_RESULT_REQ', validator('loisearch'), (req,res) => {
    res.status(200).json({ body: { loiResultList: [{ agencyEventId: "MPS123123" }]}});
});

router.post('/api/Commands/1.0.1/CAD_CREEV_REQ', validator('createevent'), (req,res) => {
    logger.info(JSON.stringify(req.body));
    res.status(200).json(createEv);
});

router.post('/api/Commands/1.0.0/GET_CALLTAKER_SESSION_REQ', validator('calltaker'), (req,res) => {
    res.status(200).json({});
});

router.post('/api/Commands/1.0.0/CAD_GET_EVTY_REQ', validator('getevty'), (req,res) => {
    res.status(200).json({ body: { agencyEventType: {}, custom_data: {} }});
});

router.post('/api/Commands/1.0.0/CAD_GET_EVTYS_RESES_REQ', validator('evtysreses'), (req,res) => {
    res.status(200).json({ body: { EventTypeResponseList: [{
    agencyEventSubtypeCode: "CQ11", agencyEventTypeCode: "C03", agencyId: "MPS"}], custom_data: {} }});
});

router.post('/api/Commands/1.0.0/CAD_GET_CROSS_REF_REQ', validator('crossref'), (req, res) => {
    res.status(200).json({});
});
router.post('/api/Commands/1.0.0/GET_AGENCY_EVENTS_ACCESS_USERGROUPS_REQ', validator('agencyusergrps'), (req, res) => {
    res.status(200).json({});
});

router.post('/api/Commands/1.0.0/GET_AGENCY_EVENTS_REQ', validator('agencyevents'), (req, res) => {
    res.status(200).json({});
});

router.post('/api/Commands/1.0.0/GETEVENT_REQ', validator('geteventreq'), (req, res) => {
    res.status(200).json(getevent);
});

router.post('/api/Commands/1.0.0/CAD_LOG_IT', (req, res) => {
    logger.info(JSON.stringify(req.body));
    res.status(200).json({});
});
router.post('/api/Commands/1.0.0/CAD_GETTOW_VEHICLES_REQ', validator('agencyevents'), (req, res) => {
    res.status(200).json({ body: { vehiclesData: [] }});
});

router.post('/api/Commands/1.0.0/CAD_SUPP_DEF_REQ', (req,res) => {
    res.status(200).json({ body: { tables: [{}] } });
});

router.post('/api/Commands/1.0.0/CAD_LOG_EVENT_ACCESS_REQ', validator('logEvents'), (req,res) => {
    res.status(200).json({});
});

router.get('/api/Remarks/GetByCommonEventId', (req, res) => {
    if(!req.query.commonEventId) {
        res.status(400).json({ error: "Missing commonEventId param"});
    } else {
        res.status(200).json(getByCommonEventId);
    }
});

router.post('/api/Commands/1.0.0/CAD_GET_SUPPLEMENTAL_INFO_REQ', validator('events'), (req, res) => {
    logger.info(JSON.stringify(req.body));
    res.status(200).json({ body: { supplementalInfoList: [] }});
});

router.post('/api/Commands/1.0.0/CAD_PARAM_TABLE_SET_REQ', validator('table'), (req, res) => {
    res.status(200).json();
});

router.post('/api/Commands/1.0.1/CAD_GET_EVENT_TAGS_REQ', validator('eventids'), (req, res) => {
    res.status(200).json({});
});

router.post('/api/Commands/1.0.0/CAD_GET_ADHOC_RESPONSE_PLAN_NAMES_REQ', (req, res) => {
    res.status(200).json({});
});


router.post('/api/Commands/1.0.1/CAD_GET_EVENT_REQUIREMENTS_REQ', validator('eventid'), (req, res) => {
    res.status(200).json({});
});

router.post('/api/Commands/1.0.0/CAD_GET_RESPONSE_PLAN_NAMES_REQ', (req, res) => {
    res.status(200).json({});
});



router.post('/api/Commands/1.0.0/GET_AGENCY_EVENT_OVERRIDDEN_RESPONSE_PLAN_REQ', validator('agencyusergrps'), (req, res) => {
    res.status(200).json({ body: { responsePlans: [], custom_data: {} }});
});

router.post('/api/Commands/1.0.0/GET_AGENCY_EVENTS_ACCESS_REQ', validator('agencyusergrps'), (req, res) => {
    res.status(200).json({ body: {
                            agencyEventId: 0,
                            eventAccessData: {
                            employees: [],
                            userGroups: []
                            }
                           }});
});

router.post('/api/Commands/1.0.0/CAD_SOP_GET_ALL_REQ', (req, res) => {
    res.status(200).json({ body: { sops: [] }});
});

router.post('/api/Commands/1.0.0/CAD_EVRPT_REQ', validator('evrtp'), (req, res) => {
    res.status(200).json(evrtpReq);
});

router.post('/api/Commands/1.0.0/CAD_GET_AGENCIES_REQ', (req,res) => {
    res.status(200).json({ body: { agencies: [{ agency: "MPS", agencyType: "Police"}], custom_data: {} }});
});

router.post('/api/Commands/1.0.0/CAD_GET_ALIAS_EVENT_TYPES_REQ', validator('aliaseventtypes'), (req,res) => {
    res.status(200).json({ body: { eventTypeAliases: [] }});
});

router.post('/api/Commands/1.0.0/CAD_ADD_CALLER_REQ', validator('addcaller'), (req, res) => {
    res.status(200).json();
});

router.post('/api/Commands/1.0.0/CAD_GET_SPL_ADDR_LOC_REQ', (req, res) => {
    logger.info(JSON.stringify(req.body));
    res.status(200).json({ body: { "specialAddress": null } });
});

router.post('/api/Commands/1.0.0/CAD_GET_EMPLOYEE_REQ', validator('getUser'), (req, res) => {
    logger.info('Get user req');
    const user = { ...userData };
    res.status(200).json({ body: { user } });
});

router.post('/api/Commands/1.0.0/CAD_PUT_ONCALL_CONFIG_REQ', validator('oncallconfig'), (req, res) => {
    res.status(200).json({});
});

router.post('/api/Commands/1.0.1/CALLER_HIST_MANAGER_REQ', validator('callerhist'), (req, res) => {
    logger.info('caller history req');
    logger.info(JSON.stringify(req.body));
    res.status(200).json({ body: { ContactHistory: { ContactHistoryID: null }, custom_data:  {} } });
});

router.post('/api/Commands/1.0.0/KNOWN_CALLER_MANAGER_REQ', validator('callerhist'), (req, res) => {
    res.status(200).json({ body: { ContactHistory: { ContactHistoryID: null }, custom_data:  {} } });
});

router.post('/api/Commands/1.0.1/CAD_GENRT_REQ', validator('generateroute'), (req, res) => {
    res.status(200).json(GENERATE_ROUTES);
});

router.post('/api/Commands/1.0.0/LOCATION_HIST_MANAGER_REQ', validator('locationhist'), (req, res) => {
    res.status(200).json({ body: { ContactHistory: { ContactHistoryID: null }, custom_data:  {} } });
});

router.post('/api/Commands/1.0.0/CAD_GET_EMP_USER_GROUPS_REQ', validator('usergroups'), (req, res) => {
    res.status(200).json({ body: { groups: [{ id: 123, name: "Operator", arole: 10000, drole: 10001, desc: "CS DO"  }] } });
});

router.post('/api/Commands/1.0.0/CAD_UPDATE_EVENT_REQ', validator('updateevent'), (req,res) => {
    logger.info(JSON.stringify(req.body));
    res.status(200).json(updateEventResp);
});

router.post('/api/Commands/1.0.0/CAD_NEARBY_EV_REQ', validator('nearbyevent'), (req,res) => {
    logger.info(JSON.stringify(req.body));
    res.status(200).json(updateEventResp);
});

router.post('/api/Commands/1.0.0/SAVE_CALLER_INFO_REQ', validator('savecaller'), (req, res) => {
    res.status(200).json([ "Unable to load the active call employee due to missing call position ID"]);
});


router.post('/api/Commands/1.0.0/CAD_CREATE_USER_REQ', validator('userrecord'), (req, res) => {
    const data = req.body;
    const user = { ...userData, ...data }; // overwrite pro-forma with data sent down.
    res.status(200).json({ body: { user } });
});

router.post('/api/Commands/1.0.0/CAD_EDIT_USER_REQ', (req, res) => {
    const user = { ...req.body };
    res.status(200).json({ body: { user }});
});

router.post('/api/Commands/1.0.0/CAD_GET_ALL_USER_DETAILS_REQ', validator('userSearchSchema'), (req, res) => {
    res.status(200).json(searchResponse);
});

router.post('/Account/SetLocale', (req, res) => {
    logger.info(`Received locale POST of ${req.body}`);
    res.status(200).send('Ok');
});

router.post('/', validator('postLoginStep'), (req, res) => {
    logger.info('Posted to base url, setting sessionId on return');
    res.cookie('sessionId', 'abc123abc123');
    res.cookie('employeeId', '11');
    res.status(200).send('Ok');
});


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
router.post('/api/Commands/1.0.0/CREEXEC_REQ',  (req, res) => {
    console.log("NO VALIDATOR FOR THIS METHOD IS IT USED YET");
    res.status(200).json(CREEXEC_REQ);
});

const CREDIALOG_REQ = require('../responses/commands/CREDIALOG_REQ');
router.post('/api/Commands/1.0.0/CREDIALOG_REQ', validator('credialog_req'), (req, res) => {
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


router.get('/api/RecommendedUnits/GetRecommendedUnitsByEventId', (req, res) => {
    if(!req.query.agencyEventId) {
        res.status(400).json({ error: "Missing agencyEventId param"});
    } else {
        res.status(200).json({
            "recommendStatus": "NoUnits",
            "eventAlarmLevel": 0,
            "errorCondition": 1
           });
    }
});

const PERSISTENT_GRID_GET_REQ = require('../responses/commands/PERSISTENT_GRID_GET_REQ');
router.post('/api/Commands/1.0.0/PERSISTENT_GRID_GET_REQ', (req, res) => {
    res.status(200).json(PERSISTENT_GRID_GET_REQ);
});

//, validator('personQuery') removed for now
router.post('/api/Commands/1.0.1/INFORMER_QUERY_PERSON_REQ', (req, res) => {
    res.status(200).json({ body: { requestId: 1 }});
});

router.post('/api/Commands/1.0.1/INFORMER_QUERY_VEHICLE_REQ', validator('vehicleQuery'), (req, res) => {
    res.status(200).json("vehicle Query OK");
});

router.post('/api/Commands/1.0.1/INFORMER_GET_RESPONSEINFO_REQ', (req, res) => {
    res.status(200).json({});
});

router.post('/api/Commands/1.0.0/CAD_GET_ALL_USER_GROUPS_REQ', (req, res) => {
    res.status(200).json({});
});

router.post('/api/Commands/1.0.0/INFORMER_QUERY_ARTICLE_REQ', validator('articleQuery'), (req, res) => {
    res.status(200).json("article Query OK");
});

router.post('/api/Commands/1.0.1/INFORMER_QUERY_LOCATION_REQ', validator('locationQuery'), (req, res) => {
    res.status(200).json("location Query OK");
});

router.post('/Account/Logoff', (req, res) => {
    logger.info('redir for logout 1');
    res.redirect(logoutRedir1);
});


module.exports = router;