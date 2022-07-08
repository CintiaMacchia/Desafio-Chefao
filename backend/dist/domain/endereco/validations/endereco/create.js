"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.create = void 0;
const express_validation_1 = require("express-validation");
exports.create = (0, express_validation_1.validate)({
    body: express_validation_1.Joi.object({
        rua: express_validation_1.Joi.string().max(100).required(),
        numero: express_validation_1.Joi.number().max(15).required(),
        complemento: express_validation_1.Joi.string().max(45).required(),
        cidade: express_validation_1.Joi.string().max(45).required(),
        estado: express_validation_1.Joi.string().max(2).required(),
        CEP: express_validation_1.Joi.string().max(9).required(),
        usuario_id: express_validation_1.Joi.number().required()
    })
});
