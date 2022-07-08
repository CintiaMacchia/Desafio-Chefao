"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_validation_1 = require("express-validation");
const express_jwt_1 = require("express-jwt");
function default_1(err, req, res, next) {
    if (err instanceof express_validation_1.ValidationError) {
        return res
            .status(400)
            .json({
            message: `Preencha corretamente todos os campos! - ${err.message}`,
        });
    }
    if (err instanceof express_jwt_1.UnauthorizedError) {
        return res.status(401).json({
            message: "E-mail ou senha inválido, verifique e tente novamente",
        });
    }
    return res.status(500).json(err);
}
exports.default = default_1;
