const { validate, Joi } = require("express-validation");

module.exports = update = validate({
    params: Joi.object({
        id: Joi.number().required(),
    }),
    body: Joi.object({
        rua: Joi.string().max(100),
        numero: Joi.number().max(15),
        complemento: Joi.string().max(45),
        cidade: Joi.string().max(45),
        estado: Joi.string().max(2),
        CEP: Joi.string().max(9),
        usuario_id: Joi.number(),
    })
})