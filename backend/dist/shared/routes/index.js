"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const routes = express_1.default.Router();
const validations_1 = require("../../domain/usuarios/validations");
//const UsuarioValidation = require('../../domain/usuarios/validations')
const usuariosControler_1 = require("../../domain/usuarios/controllers/usuariosControler");
//const UsuarioController = require('../../domain/usuarios/controllers/usuariosControler')
routes.post("/login", usuariosControler_1.UsuarioController.login);
routes.post("/users", usuariosControler_1.UsuarioController.create);
routes.get("/users", usuariosControler_1.UsuarioController.getAll);
routes.get("/users/:id", validations_1.UsuarioValidation.getOne, usuariosControler_1.UsuarioController.getOne);
//routes.put("/users/:id", UsuarioValidation.update, UsuarioController.update);
//routes.delete("/users/:id", UsuarioValidation.destroy, UsuarioController.delete);
exports.default = routes;
