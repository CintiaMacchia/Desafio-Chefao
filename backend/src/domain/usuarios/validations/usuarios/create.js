const { validate, Joi } = require("express-validation");

export const create = validate({
    body: Joi.object({
        nome: Joi.string().required(),
        email: Joi.string().email().required(),
        senha: Joi.string().required(),

    }),
});