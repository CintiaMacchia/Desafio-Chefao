const { validate, Joi } = require('express-validation')

module.exports = getOne = validate({
    params: Joi.object({
        id: Joi.number().required(),
    }),
});