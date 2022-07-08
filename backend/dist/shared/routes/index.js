"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//import express from 'express'
const express = require('express');
const routes = express.Router();
const validations_1 = require("../../domain/usuarios/validations");
//const UsuarioValidation = require('../../domain/usuarios/validations')
const usuariosControler_1 = require("../../domain/usuarios/controllers/usuariosControler");
//usuarios
routes.post("/login", usuariosControler_1.UsuarioController.login);
routes.post("/users", usuariosControler_1.UsuarioController.create);
routes.get("/users", usuariosControler_1.UsuarioController.getAll);
routes.get("/users/:id", validations_1.UsuarioValidation.getOne, usuariosControler_1.UsuarioController.getOne);
//routes.put("/users/:id", UsuarioValidation.update, UsuarioController.update);
routes.delete("/users/:id", validations_1.UsuarioValidation.destroy, usuariosControler_1.UsuarioController.delete);
//categoria
//routes.post("/categoria", CategoriaController.create);
//routes.get("/categoria/:id", CategoriaController.getOne);
exports.default = routes;
