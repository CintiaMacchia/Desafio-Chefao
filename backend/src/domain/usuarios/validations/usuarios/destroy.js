const { validate, Joi } = require("express-validation")

module.exports = destroy = validate({
    params: Joi.object({
        id: Joi.number().required(),
    }),
});