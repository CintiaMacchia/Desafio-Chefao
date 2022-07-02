import { validate, Joi } from "express-validation";

export const create = validate({
  body: Joi.object({
    nome: Joi.string().required(),
    email: Joi.string().email().required(),
    senha: Joi.string().required(),
    endereco_id: Joi.number().required(),    
  }),
});