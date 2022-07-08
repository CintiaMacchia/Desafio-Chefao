//import express from 'express'
const express = require('express')
const routes = express.Router()

import { UsuarioValidation } from '../../domain/usuarios/validations';
//const UsuarioValidation = require('../../domain/usuarios/validations')
import { UsuarioController } from '../../domain/usuarios/controllers/usuariosControler'
//const UsuarioController = require('../../domain/usuarios/controllers/usuariosControler')
<<<<<<< HEAD
import {
     CreateProdutoController} from '../../domain/produto/controllers/create/CreateProdutoController'

routes.post("/produto", CreateProdutoController.create);

=======
//import { CategoriaValidation } from '../../domain/categoria/validations';
import { CategoriaController } from '../../domain/categoria/controllers'

//usuarios
>>>>>>> 87873a0fe5b4262c138d566609bcc0b8e29567c6
routes.post("/login", UsuarioController.login);
routes.post("/users", UsuarioController.create);
routes.get("/users", UsuarioController.getAll);
routes.get("/users/:id", UsuarioValidation.getOne, UsuarioController.getOne);
//routes.put("/users/:id", UsuarioValidation.update, UsuarioController.update);
routes.delete("/users/:id", UsuarioValidation.destroy, UsuarioController.delete);

//categoria
//routes.post("/categoria", CategoriaController.create);
//routes.get("/categoria/:id", CategoriaController.getOne);


export default routes;