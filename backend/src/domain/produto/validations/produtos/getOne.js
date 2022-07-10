<<<<<<< HEAD
const { validate, Joi } = require("express-validation");
=======
const { validate, Joi } = require("express-validation")
>>>>>>> 3d12aceeec85c81cfe66b7b13c9dcc754986a2ff

export const getOne = validate({
    params: Joi.object({
        id: Joi.number().required(),
    }),

})