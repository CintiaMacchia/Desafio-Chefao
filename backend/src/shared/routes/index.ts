import express from 'express'
//const express = require('express')
const routes = express.Router()

import { UsuarioValidation } from '../../domain/usuarios/validations';
import { UsuarioController } from '../../domain/usuarios/controllers/usuariosControler'
import { CondicaoController } from '../../domain/condicao/controllers/condicaoController';
import { CondicaoValidation } from '../../domain/condicao/validations';
import { CategoriaValidation } from '../../domain/categoria/validations';
import { CategoriaController } from '../../domain/categoria/controllers'
import { EnderecoController } from '../../domain/endereco/controllers/enderecoController'
import { EnderecoValidation } from '../../domain/endereco/validations';
import { FindAllProdutoController} from '../../domain/produto/controllers/FindAllProdutoController';
import { FindOneProdutosController } from '../../domain/produto/controllers/FindOneProdutoController';
import { DestroyProdutoController } from '../../domain/produto/controllers/DestroyProdutoController';
import { updateProdutoController } from '../../domain/produto/controllers/UpdateProdutoController';
import { CreateProdutoController} from '../../domain/produto/controllers/CreateProdutoController'
import { loginValidation} from '../../domain/usuarios/validations/usuarios/login'
import auth  from '../middlewares/auth'

//interface  ProdutoController {} ('../../domain/produto/Create/ProdutoController')
//import ProdutoCreateController from '../../domain/produto/controllers/ProdutoCreateController'
//usuarios

routes.post("/users", UsuarioValidation.create, UsuarioController.create);
routes.get("/users", UsuarioController.getAll);
routes.get("/users/:id", UsuarioValidation.getOne, UsuarioController.getOne);
routes.put("/users/:id", UsuarioValidation.update ,UsuarioController.update);
routes.delete("/users/:id", UsuarioValidation.destroy, UsuarioController.delete);

//login
routes.post("/login", UsuarioController.login);
routes.post("/login",loginValidation, auth, UsuarioController.login)

// routes.post("/login", loginValidation, auth, UsuarioValidation.create);

//categoria
routes.post("/categoria", CategoriaValidation.create, CategoriaController.create);
routes.get("/categoria/:id", CategoriaController.getOne);
routes.get("/categorias", CategoriaController.getAll);
routes.put("/categoria/:id",CategoriaValidation.update, CategoriaController.update);
routes.delete("/categoria/:id", CategoriaController.delete);


//Condicao
routes.get("/condicao", CondicaoController.getAll)
routes.post("/condicao", CondicaoValidation.create , CondicaoController.create)
routes.get("/condicao/:id", CondicaoController.getOne)
routes.delete("/condicao/:id", CondicaoValidation.destroy ,CondicaoController.delete)
routes.put("/condicao/:id", CondicaoValidation.update ,CondicaoController.update)

//Endereço
routes.get("/endereco", EnderecoController.getAll);
routes.get("/endereco/:id", EnderecoController.getOne);
routes.post("/endereco" ,EnderecoController.create)
routes.put("/endereco/:id",EnderecoController.update)
routes.delete("/endereco/:id", EnderecoValidation.destroy, EnderecoController.delete);

//produtos

routes.get("/produtos", FindAllProdutoController.listarTodos);
routes.get("/produto/:id", FindOneProdutosController.umProduto);
routes.delete("/produto/:id", DestroyProdutoController.delete);
routes.put("/produto/:id", updateProdutoController.update);
routes.post("/produto", CreateProdutoController.create)

export default routes;