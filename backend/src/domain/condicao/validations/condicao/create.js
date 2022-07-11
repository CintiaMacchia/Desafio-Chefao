const { validate, Joi } = require('express-validation')

module.exports = create = validate({
    body: Joi.object({
        condicao: Joi.string().required()
    })
})