<<<<<<< HEAD
const { validate, Joi } = require("express-validation");
=======
const { validate, Joi } = require("express-validation")
>>>>>>> 3d12aceeec85c81cfe66b7b13c9dcc754986a2ff

export const create = validate({
    body: Joi.object({
        nome: Joi.string().max(100).required(),
        descricao: Joi.number().max(15).required(),
        valor: Joi.number().required(),
        foto: Joi.string().required(),
        categoria_id: Joi.number().required(),
        usuario_id: Joi.number().required(),
        condicao_id: Joi.number().required()
    })
})