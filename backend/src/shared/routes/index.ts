//import express from 'express'
const express = require('express')
const routes = express.Router()

import { UsuarioValidation } from '../../domain/usuarios/validations';
//const UsuarioValidation = require('../../domain/usuarios/validations')
import { UsuarioController } from '../../domain/usuarios/controllers/usuariosControler'
import { EnderecoController } from '../../domain/endereco/controllers/endereco.controller';
//const UsuarioController = require('../../domain/usuarios/controllers/usuariosControler')
//import { CategoriaValidation } from '../../domain/categoria/validations';
import { CategoriaController } from '../../domain/categoria/controllers'

//usuarios
routes.post("/login", UsuarioController.login);
routes.post("/users", UsuarioController.create);
routes.get("/users", UsuarioController.getAll);
routes.get("/users/:id", UsuarioValidation.getOne, UsuarioController.getOne);
//routes.put("/users/:id", UsuarioValidation.update, UsuarioController.update);
routes.delete("/users/:id", UsuarioValidation.destroy, UsuarioController.delete);



export default routes;