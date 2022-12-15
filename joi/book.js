const joi = require('joi');

const bookSchema = joi.object().keys({
    _id: joi.number().required(),
    isbn: joi.string().required(),
    name: joi.string().required(),
    author: joi.string().required(),
    publishedDate: joi.string()
});

module.exports = bookSchema;