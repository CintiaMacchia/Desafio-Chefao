import { validate, Joi } from "express-validation";

export const create = validate({
    body: Joi.object({
        rua: Joi.string().max(100).required(),
        numero: Joi.number().max(15).required(),
        complemento: Joi.string().max(45).required(),
        cidade: Joi.string().max(45).required(),
        estado: Joi.string().max(2).required(),
        CEP: Joi.string().max(9).required(),
        usuario_id: Joi.number().required()
    })
})