const joi = require('joi');

const userSearchSchema = joi.object().keys({
  offset: joi.number().required(),
  size: joi.number().required(),
  term: joi.string().required(),
  isActive: joi.boolean().required()
});

const getUser = joi.object().keys({
    empid: joi.number().required()
});


module.exports = { userSearchSchema, getUser };