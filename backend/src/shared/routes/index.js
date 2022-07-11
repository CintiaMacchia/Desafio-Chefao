//import express from 'express'
const express = require('express')
const routes = express.Router()

const UsuarioValidation = require('../../domain/usuarios/validations');
const UsuarioController = require('../../domain/usuarios/controllers/usuariosControler');
const CondicaoController = require('../../domain/condicao/controllers/condicaoController');
const CondicaoValidation = require('../../domain/condicao/validations');
const CategoriaValidation = require('../../domain/categoria/validations');
const categoriaController = require('../../domain/categoria/controllers')
const EnderecoController = require('../../domain/endereco/controllers/enderecoController')
const EnderecoValidation = require('../../domain/endereco/validations');
const FindAllProdutoController = require('../../domain/produto/controllers/FindAllProdutoController');
const FindOneProdutosController = require('../../domain/produto/controllers/FindOneProdutoController');
const DestroyProdutoController = require('../../domain/produto/controllers/DestroyProdutoController');
const updateProdutoController = require('../../domain/produto/controllers/UpdateProdutoController');
const CreateProdutoController = require('../../domain/produto/controllers/CreateProdutoController')
const loginValidation = require('../../domain/usuarios/validations/usuarios/login')
const auth = require('../middlewares/auth')

//interface  ProdutoController {} ('../../domain/produto/Create/ProdutoController')
//import ProdutoCreateController from '../../domain/produto/controllers/ProdutoCreateController'
//usuarios
routes.post("/users", UsuarioController.create);
routes.get("/users", UsuarioController.getAll);
routes.get("/users/:id", UsuarioController.getOne);
// routes.put("/users/:id", UsuarioValidation.update, UsuarioController.update);
// routes.delete("/users/:id", UsuarioValidation.destroy, UsuarioController.delete);

// //login
// routes.post("/login", UsuarioController.login);
// routes.post("/login", loginValidation, auth, UsuarioController.login)

// // routes.post("/login", loginValidation, auth, UsuarioValidation.create);

// //categoria
routes.post("/categoria", categoriaController.create);
routes.get("/categoria/:id", categoriaController.getOne);
routes.get("/categorias", categoriaController.getAll);
routes.put("/categoria/:id", categoriaController.update);
routes.delete("/categoria/:id", categoriaController.delete);


// //Condicao
// routes.get("/condicao", CondicaoController.getAll)
routes.post("/condicao", CondicaoController.create)
    // routes.get("/condicao/:id", CondicaoController.getOne)
    // routes.delete("/condicao/:id", CondicaoValidation.destroy, CondicaoController.delete)
routes.put("/condicao/:id", CondicaoController.update)

// //Endereço
// routes.get("/endereco", EnderecoController.getAll);
// routes.get("/endereco/:id", EnderecoController.getOne);
// routes.post("/endereco", EnderecoController.create)
// routes.put("/endereco/:id", EnderecoController.update)
// routes.delete("/endereco/:id", EnderecoValidation.destroy, EnderecoController.delete);

//produtos

routes.get("/produtos", FindAllProdutoController.getAll);
routes.get("/produto/:id", FindOneProdutosController.getOne);
routes.delete("/produto/:id", DestroyProdutoController.delete);
// routes.put("/produto/:id", updateProdutoController.update);
routes.post("/produto", CreateProdutoController.create)


module.exports = routes