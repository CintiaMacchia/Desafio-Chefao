const { validate, Joi } = require('express-validation')

export const update = validate({
    params: Joi.object({
        id: Joi.number().required(),
    }),
    body: Joi.object({
        categoria: Joi.string(),
    }),
});