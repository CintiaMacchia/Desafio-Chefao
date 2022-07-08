"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.update = void 0;
const express_validation_1 = require("express-validation");
exports.update = (0, express_validation_1.validate)({
    params: express_validation_1.Joi.object({
        id: express_validation_1.Joi.number().required(),
    }),
    body: express_validation_1.Joi.object({
        nome: express_validation_1.Joi.string(),
        email: express_validation_1.Joi.string().email(),
        senha: express_validation_1.Joi.string(),
    }),
});
