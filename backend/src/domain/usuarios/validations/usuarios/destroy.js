<<<<<<< HEAD
const { validate, Joi } = require("express-validation");

export const destroy = validate({
    params: Joi.object({
        id: Joi.number().required(),
    }),
=======
const { validate, Joi } = require ("express-validation")

module.exports = destroy = validate({
  params: Joi.object({
    id: Joi.number().required(),
  }),
>>>>>>> 3d12aceeec85c81cfe66b7b13c9dcc754986a2ff
});