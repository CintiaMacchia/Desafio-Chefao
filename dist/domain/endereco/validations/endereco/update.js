"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.update = void 0;
const express_validation_1 = require("express-validation");
exports.update = (0, express_validation_1.validate)({
    params: express_validation_1.Joi.object({
        id: express_validation_1.Joi.number().required(),
    }),
    body: express_validation_1.Joi.object({
        rua: express_validation_1.Joi.string().max(100),
        numero: express_validation_1.Joi.number().max(15),
        complemento: express_validation_1.Joi.string().max(45),
        cidade: express_validation_1.Joi.string().max(45),
        estado: express_validation_1.Joi.string().max(2),
        CEP: express_validation_1.Joi.string().max(9),
        usuario_id: express_validation_1.Joi.number(),
    })
});
