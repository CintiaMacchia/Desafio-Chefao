import { validate, Joi } from "express-validation";

export const create = validate({
  body: Joi.object({
    categoria: Joi.string().required(),    
  }),
});