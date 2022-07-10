"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.create = void 0;
const express_validation_1 = require("express-validation");
exports.create = (0, express_validation_1.validate)({
    body: express_validation_1.Joi.object({
        nome: express_validation_1.Joi.string().max(100).required(),
        descricao: express_validation_1.Joi.number().max(15).required(),
        valor: express_validation_1.Joi.number().required(),
        foto: express_validation_1.Joi.string().required(),
        categoria_id: express_validation_1.Joi.number().required(),
        usuario_id: express_validation_1.Joi.number().required(),
        condicao_id: express_validation_1.Joi.number().required()
    })
});
