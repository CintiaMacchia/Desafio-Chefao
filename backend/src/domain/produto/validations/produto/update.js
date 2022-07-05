import { validate, Joi } from "express-validation";

export const update = validate({
    params: Joi.object({
        id: Joi.number().required(),
    }),
    body: Joi.object({
        nome: Joi.string(),
        descricao: Joi.string(),
        valor: Joi.number().$(),
        foto: Joi.string(),
        categoria: Joi.number(),
        condicao: Joi.string(),
        usuario_id: Joi.string(),

    }),
});