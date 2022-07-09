const { validate, Joi } = require('express-validation');

export const loginValidation = validate({
    body: Joi.object({
        email: Joi.string().email().required(),
        senha: Joi.string().min(10).required(),
    })

});