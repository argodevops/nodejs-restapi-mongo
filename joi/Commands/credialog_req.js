const joi = require('joi');

const creStateData = joi.object().keys({
  ruleString: joi.string().required(),
  args: joi.array().required(),
  agencyEventId: joi.array().required(),
  unitId: joi.array().required(),
  responseIndicator: joi.boolean().required(),
  responseString: [joi.string().required(), joi.allow(null,'')],
  continueIndicator: joi.boolean().required(),
  ruleIdString: [joi.string().optional(), joi.allow(null)],
  createEventData: joi.object().required(),
  updateEventData: joi.object().required(),
  commands: joi.array().required(),
  comments: joi.array().required(),
  gadgetVariablesToGet: joi.array().required(),
  gadgetVariablesToSet: joi.array().required(),
  dialogTitleString: [joi.string().optional(), joi.allow(null)],
  dialogVersionString: [joi.string().optional(), joi.allow(null)],
  overrideDialogTitleString: [joi.string().optional(), joi.allow(null)],
  hideBackButton: joi.boolean().required(),
  hideCancelButton: joi.boolean().required(),
  hideSubmitButton: joi.boolean().required(),
  showExtraSubmitButton: joi.boolean().required(),
  backButtonTex: [joi.string().optional(), joi.allow(null)],
  cancelButtonText: [joi.string().optional(), joi.allow(null)],
  submitButtonText: [joi.string().optional(), joi.allow(null)],
  extraSubmitButtonText: [joi.string().optional(), joi.allow(null)],
  clickedButtonText: [joi.string().optional(), joi.allow(null)],
  wavFiles: joi.array().required(),
  urisToOpen: joi.array().required()
}).unknown();

const credialog_req = joi.object().keys({
    creStateData: creStateData,
    ruleString: joi.string().required()
});

module.exports = credialog_req;