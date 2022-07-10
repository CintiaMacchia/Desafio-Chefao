"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginValidation = void 0;
const { validate, Joi } = require('express-validation');
exports.loginValidation = validate({
    body: Joi.object({
        email: Joi.string().email().required(),
        senha: Joi.string().min(10).required(),
    })
});
