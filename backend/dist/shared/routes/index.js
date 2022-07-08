"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//import express from 'express'
const express = require('express');
const routes = express.Router();
const validations_1 = require("../../domain/usuarios/validations");
const usuariosControler_1 = require("../../domain/usuarios/controllers/usuariosControler");
const condicaoController_1 = require("../../domain/condicao/controllers/condicaoController");
//import { CategoriaValidation } from '../../domain/categoria/validations';
const controllers_1 = require("../../domain/categoria/controllers");
//usuarios
routes.post("/login", usuariosControler_1.UsuarioController.login);
routes.post("/users", usuariosControler_1.UsuarioController.create);
routes.get("/users", usuariosControler_1.UsuarioController.getAll);
routes.get("/users/:id", validations_1.UsuarioValidation.getOne, usuariosControler_1.UsuarioController.getOne);
//routes.put("/users/:id", UsuarioValidation.update, UsuarioController.update);
routes.delete("/users/:id", validations_1.UsuarioValidation.destroy, usuariosControler_1.UsuarioController.delete);
//categoria
routes.post("/categoria", controllers_1.CategoriaController.create);
routes.get("/categoria/:id", controllers_1.CategoriaController.getOne);
routes.get("/categorias", controllers_1.CategoriaController.getAll);
routes.put("categoria", controllers_1.CategoriaController.update);
routes.delete("categoria", controllers_1.CategoriaController.delet);
//Condicao
routes.get("/condicao", condicaoController_1.CondicaoController.getAll);
routes.post("/condicao", condicaoController_1.CondicaoController.create);
exports.default = routes;
