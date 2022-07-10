<<<<<<< HEAD
const { validate, Joi } = require("express-validation");

export const update = validate({
    params: Joi.object({
        id: Joi.number().required(),
    }),
    body: Joi.object({
        nome: Joi.string(),
        email: Joi.string().email(),
        senha: Joi.string(),

    }),
=======
const { validate, Joi } = require("express-validation")

module.exports = update = validate({
  params: Joi.object({
    id: Joi.number().required(),
  }),
  body: Joi.object({
    nome: Joi.string(),
    email: Joi.string().email(),
    senha: Joi.string(),
    
  }),
>>>>>>> 3d12aceeec85c81cfe66b7b13c9dcc754986a2ff
});