<<<<<<< HEAD
const { validate, Joi } = require("express-validation");

export const create = validate({
    body: Joi.object({
        nome: Joi.string().required(),
        email: Joi.string().email().required(),
        senha: Joi.string().required(),

    }),
=======
const { validate, Joi } = require("express-validation")

module.exports = create = validate({
  body: Joi.object({
    nome: Joi.string().required(),
    email: Joi.string().email().required(),
    senha: Joi.string().required(),
        
  }),
>>>>>>> 3d12aceeec85c81cfe66b7b13c9dcc754986a2ff
});