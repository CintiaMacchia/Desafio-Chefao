const { validate, Joi } = require('express-validation')

export const create = validate({
    body: Joi.object({
        categoria: Joi.string().required(),
    }),
});