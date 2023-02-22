const createHttpError = require('http-errors');
const joi = require('joi');
const logger = require('../logger/api.logger');
const validators = require('../joi/');

module.exports = function(validator) {
    if (!validators.hasOwnProperty(validator)) {
        logger.info('No validator property?');
        throw new Error(`'${validator}' validator does not exist`);
    }
    logger.info(`Validating ${validator}`);
    return async function(req, res, next) {
        try {
            const validated = await validators[validator].validateAsync(req.body);
            req.body = validated;
            next();
        } catch (error) {
            if (error.isJoi) {
                return next(createHttpError(422, {message: error.message}));
            }
            next(createHttpError(500));
        }
    }
}