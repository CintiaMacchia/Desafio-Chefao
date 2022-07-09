import express from 'express'
//const express = require('express')
const routes = express.Router()

import { UsuarioValidation } from '../../domain/usuarios/validations';
import { UsuarioController } from '../../domain/usuarios/controllers/usuariosControler'
import { CondicaoController } from '../../domain/condicao/controllers/condicaoController';
//import { CategoriaValidation } from '../../domain/categoria/validations';
import { CategoriaController } from '../../domain/categoria/controllers'
import { EnderecoController } from '../../domain/endereco/controllers/enderecoController'

import { loginValidation} from '../../domain/usuarios/validations/usuarios/login'
import auth from '../middlewares/auth'

//usuarios

routes.post("/users", UsuarioController.create);
routes.get("/users", UsuarioController.getAll);
routes.get("/users/:id", UsuarioValidation.getOne, UsuarioController.getOne);
routes.put("/users/:id", UsuarioController.update);
routes.delete("/users/:id", UsuarioValidation.destroy, UsuarioController.delete);

//login
routes.post("/login", UsuarioController.login);
routes.post("/login",loginValidation, auth, UsuarioController.login)

// routes.post("/login", loginValidation, auth, UsuarioValidation.create);

//categoria
routes.post("/categoria", CategoriaController.create);
routes.get("/categoria/:id", CategoriaController.getOne);
routes.get("/categorias", CategoriaController.getAll);
routes.put("/categoria/:id", CategoriaController.update);
routes.delete("/categoria/:id", CategoriaController.delete);


//Condicao
routes.get("/condicao", CondicaoController.getAll)
routes.post("/condicao", CondicaoController.create)
routes.get("/condicao/:id", CondicaoController.getOne)
routes.delete("/condicao/:id", CondicaoController.delete)
routes.put("/condicao/:id", CondicaoController.update)

//Endereço
routes.get("/endereco", EnderecoController.getAll);
routes.get("/endereco/:id", EnderecoController.getOne);
routes.post("/endereco", EnderecoController.create)
routes.put("/endereco/:id", EnderecoController.update)
routes.delete("/endereco/:id", EnderecoController.delete)

export default routes;