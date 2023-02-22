const joi = require('joi');

const offlineOptions = joi.object().keys({
     messageName: joi.string().required(),
     messageVersion: joi.string().required(),
     allowOffline: joi.boolean().required(),
     offlinePriority:  joi.number().required(),
     timeToLive:  joi.number().required(),
     retryCount:  joi.number().required(),
     queueType: joi.string().required(),
     isReplaceable: joi.boolean().required(),
     shouldQueue: joi.boolean().required(),
     failedAttempts:  joi.number().required()
 });

const pergridget_req = joi.object().keys({
    employeeId:  joi.number().required(),
    gridName: joi.string().required(),
    offlineOptions: offlineOptions
});

module.exports = pergridget_req;