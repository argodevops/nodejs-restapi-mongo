const express = require('express');
const router = express.Router();
const validator = require('../middleware/validator');
const logger = require('../logger/api.logger');

const logoutRedir1 = "/oncall.identity/connect/endsession?post_logout_redirect_uri=https%3A%2F%localhost:3000/oncall/&id_token_hint=TOKEN_STUFF&ui_locales=en-gb&x-client-SKU=ID_NET461&x-client-ver=6.8.0.0";
// pro forma of create record
const createRecord = {
 "mhdr": {
  "id": "624f3086-cb87-4e82-9ce3-4cb236657f0c",
  "format": "CAD_DEPLO_RSP",
  "ver": "1.0.0",
  "sessionId": "d7cf5f92-4220-44cb-b507-b6f94b3facda",
  "lang": null,
  "langcfg": null,
  "routing": {
   "orig": "eventcmds-7c64b7c6b6-nbxhq.11024",
   "dest": "website-69d688c8fb-xdbpn.11352",
   "reply": null,
   "host": null,
   "ttl": "2023-02-24T14:59:48.0247215+00:00",
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
  "resp": [
   {
    "ag": "MPS",
    "evnum": null,
    "alarmlev": 0,
    "evstat": 0,
    "evsubstat": 0,
    "sTime": null,
    "r": true,
    "dg": "CN",
    "lev2": "Fortune Green",
    "lev3": "CNW",
    "lev4": "MPS",
    "lev5": "Central North",
    "esz": 159,
    "prio": 1,
    "eta": 0,
    "disporeq": false,
    "loiavail": 30,
    "t1": 0,
    "t2": 0,
    "t3": 0,
    "t4": 0,
    "majevt": null,
    "tycod": "C02",
    "tydesc": "Sexual Offences",
    "sub_tycod": "CQ08",
    "subtydesc": "Suspect Present",
    "neardist": 0,
    "loidist": 0,
    "caseid": 0,
    "ascase": 0,
    "duration": 0
   }
  ]
 }
}

goecoderesp = {
   "mhdr": {
    "id": "88d90673-3ef2-4611-bed9-b220a4abb7f0",
    "format": "CAD_REVERSE_GEOCODING_MSG_RSP",
    "ver": "1.0.0",
    "sessionId": "d7cf5f92-4220-44cb-b507-b6f94b3facda",
    "lang": null,
    "langcfg": null,
    "routing": {
     "orig": "geocoding-5cdfb45697-qjwqc.32652",
     "dest": "website-69d688c8fb-xdbpn.11352",
     "reply": null,
     "host": null,
     "ttl": "2023-02-24T14:59:39.3958214+00:00",
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
    "address": "LL(51.554858,-0.211444)",
    "results": [
     {
      "loc": "LL(51.554858,-0.211444)",
      "conf": 1,
      "match": "exact",
      "addrtyp": 0,
      "lat": 51.554857812714715,
      "lon": -0.21144390106201175,
      "drlat": 51.554857812714715,
      "drlon": -0.21144390106201175,
      "num": null,
      "AddNumFrom": null,
      "AddNumTo": null,
      "dirpre": null,
      "feanme": null,
      "featyp": null,
      "dirsuf": null,
      "mun": null,
      "area": null,
      "apt": null,
      "bldg": null,
      "locfld1": null,
      "locfld2": null,
      "locfld3": null,
      "locfld4": null,
      "zip": null,
      "xst1": null,
      "xst2": null,
      "cmt": "",
      "addrid": null,
      "esz": 0,
      "providerToken": null,
      "fromAniAli": false,
      "providerName": "PointParser",
      "locationVerifiedTime": null,
      "locationType": null,
      "placeName": null,
      "state": null,
      "unitType": null,
      "layerName": null,
      "providerResponse": "{ \"address\": \"LL(51.554858,-0.211444)\", \"location\": { \"x\": 51.5548578127147, \"y\": -0.211443901062012 } }"
     }
    ]
   }
  };

const locBody = {
                 "mhdr": {
                  "id": "66cc3708-9ebe-4d09-95a2-1e29f3818ca6",
                  "format": "CAD_LV_RSP",
                  "ver": "1.0.1",
                  "sessionId": "d7cf5f92-4220-44cb-b507-b6f94b3facda",
                  "lang": null,
                  "langcfg": null,
                  "routing": {
                   "orig": "geocoding-5cdfb45697-qjwqc.32652",
                   "dest": "website-69d688c8fb-xdbpn.11352",
                   "reply": null,
                   "host": null,
                   "ttl": "2023-02-24T14:59:39.6360902+00:00",
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
                  "results": [
                   {
                    "loc": "LL(51.554858,-0.211444)",
                    "conf": 1,
                    "match": "exact",
                    "addrtyp": 0,
                    "lat": 51.554858,
                    "lon": -0.211444,
                    "drlat": 51.554858,
                    "drlon": -0.211444,
                    "num": null,
                    "AddNumFrom": null,
                    "AddNumTo": null,
                    "dirpre": null,
                    "feanme": null,
                    "featyp": null,
                    "dirsuf": null,
                    "mun": null,
                    "area": null,
                    "apt": null,
                    "bldg": null,
                    "locfld1": null,
                    "locfld2": null,
                    "locfld3": null,
                    "locfld4": null,
                    "zip": null,
                    "xst1": null,
                    "xst2": null,
                    "cmt": null,
                    "addrid": null,
                    "esz": 0,
                    "providerToken": null,
                    "fromAniAli": false,
                    "providerName": "PointParser",
                    "locationVerifiedTime": null,
                    "locationType": null,
                    "placeName": null,
                    "state": null,
                    "unitType": null,
                    "layerName": "",
                    "providerResponse": "{ \"address\": \"LL(51.554858,-0.211444)\", \"location\": { \"x\": 51.554858, \"y\": -0.211444 } }"
                   }
                  ],
                  "suggest": false
                 }
                };

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

const createEv = {
                  "mhdr": {
                   "id": "d33ad4b1-84db-41f8-9bed-4cb13fb34cf7",
                   "format": "CAD_CREEV_RSP",
                   "ver": "1.0.1",
                   "sessionId": "d7cf5f92-4220-44cb-b507-b6f94b3facda",
                   "lang": null,
                   "langcfg": null,
                   "routing": {
                    "orig": "eventcmds-7c64b7c6b6-nbxhq.11024",
                    "dest": "website-69d688c8fb-xdbpn.11352",
                    "reply": null,
                    "host": null,
                    "ttl": "2023-02-24T15:00:18.5532036+00:00",
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
                   "deplo": [
                    {
                     "ag": "MPS",
                     "evnum": "MPS20230224000006",
                     "alarmlev": 0,
                     "evstat": 7,
                     "evsubstat": 1,
                     "sTime": "2023-02-24T14:59:48.204461+00:00",
                     "r": null,
                     "dg": "CN",
                     "lev2": "Fortune Green",
                     "lev3": "CNW",
                     "lev4": "MPS",
                     "lev5": "Central North",
                     "esz": 159,
                     "prio": 2,
                     "eta": 0,
                     "disporeq": false,
                     "loiavail": 0,
                     "t1": 0,
                     "t2": 0,
                     "t3": 0,
                     "t4": 0,
                     "majevt": null,
                     "tycod": "C02",
                     "tydesc": "Sexual Offences",
                     "sub_tycod": "CQ09",
                     "subtydesc": "Suspect not Present",
                     "neardist": 0,
                     "loidist": 0,
                     "caseid": 0,
                     "ascase": 0,
                     "duration": 0
                    }
                   ]
                  }
                 }

router.post('/api/Commands/1.0.0/CAD_DEPLO_REQ', validator('create'), (req,res) => {
    res.status(200).json(createRecord);
});

router.post('/api/Commands/1.0.0/CAD_REVERSE_GEOCODING_MSG_REQ', validator('geoSchema'), (req,res) => {
    res.status(200).json(goecoderesp);
});

router.post('/api/Commands/1.0.1/CAD_LV_REQ', validator('locationSchema'), (req,res) => {
    res.status(200).json(locBody);
});

router.post('/api/Commands/1.0.1/CAD_CREEV_REQ', validator('eventSchema'), (req,res) => {
    logger.info(JSON.stringify(createEv));
    res.status(200).json(createEv);
});

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

router.post('/Account/Logoff', (req, res) => {
    logger.info('redir for logout 1');
    res.redirect(logoutRedir1);
});


module.exports = router;