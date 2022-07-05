import { validate, Joi } from "express-validation";

export const create = validate({
    body: Joi.object({
        nome: Joi.string().required(),
        descricao: Joi.string().required(),
        valor: Joi.number().$().required(),
        foto: Joi.string().required(),
        categoria: Joi.number().required(),
        condicao: Joi.string().required(),
        usuario_id: Joi.string().required(),
    }),
});