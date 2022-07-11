<<<<<<< HEAD
const { validate, Joi } = require("express-validation")

module.exports = destroy = validate({
    params: Joi.object({
        id: Joi.number().required(),
    }),
=======
const { validate, Joi } = require ("express-validation")

module.exports = destroy = validate({
  params: Joi.object({
    id: Joi.number().required(),
  }),

>>>>>>> 27013ca2c467e5fd9407a39d01f9c1612e330b8b
});