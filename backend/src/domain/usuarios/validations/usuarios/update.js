const { validate, Joi } = require("express-validation")

module.exports = update = validate({
<<<<<<< HEAD
    params: Joi.object({
        id: Joi.number().required(),
    }),
    body: Joi.object({
        nome: Joi.string(),
        email: Joi.string().email(),
        senha: Joi.string(),

    }),
=======
  params: Joi.object({
    id: Joi.number().required(),
  }),
  body: Joi.object({
    nome: Joi.string(),
    email: Joi.string().email(),
    senha: Joi.string(),
    
  }),

>>>>>>> 27013ca2c467e5fd9407a39d01f9c1612e330b8b
});