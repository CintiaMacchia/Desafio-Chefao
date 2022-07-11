const { validate, Joi } = require("express-validation")

module.exports = create = validate({
<<<<<<< HEAD
    body: Joi.object({
        nome: Joi.string().required(),
        email: Joi.string().email().required(),
        senha: Joi.string().required(),

    }),
=======
  body: Joi.object({
    nome: Joi.string().required(),
    email: Joi.string().email().required(),
    senha: Joi.string().required(),
        
  }),

>>>>>>> 27013ca2c467e5fd9407a39d01f9c1612e330b8b
});