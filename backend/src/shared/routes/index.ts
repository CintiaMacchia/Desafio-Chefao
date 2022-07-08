import express from 'express'
//const express = require('express')
const routes = express.Router()

import { UsuarioValidation } from '../../domain/usuarios/validations';
import { UsuarioController } from '../../domain/usuarios/controllers/usuariosControler'
import { CondicaoController } from '../../domain/condicao/controllers/condicaoController';
//import { CategoriaValidation } from '../../domain/categoria/validations';
import { CategoriaController } from '../../domain/categoria/controllers'
import { EnderecoController } from '../../domain/endereco/controllers/enderecoController'


//usuarios
routes.post("/login", UsuarioController.login);
routes.post("/users", UsuarioController.create);
routes.get("/users", UsuarioController.getAll);
routes.get("/users/:id", UsuarioValidation.getOne, UsuarioController.getOne);
routes.put("/users/:id", UsuarioController.update);
routes.delete("/users/:id", UsuarioValidation.destroy, UsuarioController.delete);



//categoria
routes.post("/categoria", CategoriaController.create);
routes.get("/categoria/:id", CategoriaController.getOne);
routes.get("/categorias", CategoriaController.getAll)
routes.put("categoria/:id", CategoriaController.update)
//routes.delete("categoria/:id", CategoriaController.delet)

//Condicao
routes.get("/condicao", CondicaoController.getAll)
routes.post("/condicao", CondicaoController.create)

//Endereço
routes.get("/enderecos", EnderecoController.getAll)
//routes.post("/endereco", EnderecoController.create)
routes.get("/endereco/:id", EnderecoController.getOne)

export default routes;