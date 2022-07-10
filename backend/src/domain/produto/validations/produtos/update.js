import { validate, Joi } from "express-validation";

export const update = validate({
    params: Joi.object({
        id: Joi.number().required(),
    }),
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