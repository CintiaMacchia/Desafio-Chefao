const { validate, Joi } = require('express-validation')


module.exports = create = validate({
    body: Joi.object({
        categoria: Joi.string().required(),
    }),
});