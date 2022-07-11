const { validate, Joi } = require('express-validation')

module.exports = update = validate({
    params: Joi.object({
        id: Joi.number().required(),
    }),
    body: Joi.object({
        condicao: Joi.string(),
    })
})