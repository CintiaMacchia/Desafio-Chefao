"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
//const express = require('express')
const routes = express_1.default.Router();
const validations_1 = require("../../domain/usuarios/validations");
const usuariosControler_1 = require("../../domain/usuarios/controllers/usuariosControler");
const condicaoController_1 = require("../../domain/condicao/controllers/condicaoController");
const validations_2 = require("../../domain/condicao/validations");
const validations_3 = require("../../domain/categoria/validations");
const controllers_1 = require("../../domain/categoria/controllers");
const enderecoController_1 = require("../../domain/endereco/controllers/enderecoController");
const validations_4 = require("../../domain/endereco/validations");
const FindAllProdutoController_1 = require("../../domain/produto/controllers/FindAllProdutoController");
const FindOneProdutoController_1 = require("../../domain/produto/controllers/FindOneProdutoController");
const DestroyProdutoController_1 = require("../../domain/produto/controllers/DestroyProdutoController");
const UpdateProdutoController_1 = require("../../domain/produto/controllers/UpdateProdutoController");
const CreateProdutoController_1 = require("../../domain/produto/controllers/CreateProdutoController");
const login_1 = require("../../domain/usuarios/validations/usuarios/login");
const auth_1 = __importDefault(require("../middlewares/auth"));
//interface  ProdutoController {} ('../../domain/produto/Create/ProdutoController')
//import ProdutoCreateController from '../../domain/produto/controllers/ProdutoCreateController'
//usuarios
routes.post("/users", validations_1.UsuarioValidation.create, usuariosControler_1.UsuarioController.create);
routes.get("/users", usuariosControler_1.UsuarioController.getAll);
routes.get("/users/:id", validations_1.UsuarioValidation.getOne, usuariosControler_1.UsuarioController.getOne);
routes.put("/users/:id", validations_1.UsuarioValidation.update, usuariosControler_1.UsuarioController.update);
routes.delete("/users/:id", validations_1.UsuarioValidation.destroy, usuariosControler_1.UsuarioController.delete);
//login
routes.post("/login", usuariosControler_1.UsuarioController.login);
routes.post("/login", login_1.loginValidation, auth_1.default, usuariosControler_1.UsuarioController.login);
// routes.post("/login", loginValidation, auth, UsuarioValidation.create);
//categoria
routes.post("/categoria", validations_3.CategoriaValidation.create, controllers_1.CategoriaController.create);
routes.get("/categoria/:id", controllers_1.CategoriaController.getOne);
routes.get("/categorias", controllers_1.CategoriaController.getAll);
routes.put("/categoria/:id", validations_3.CategoriaValidation.update, controllers_1.CategoriaController.update);
routes.delete("/categoria/:id", controllers_1.CategoriaController.delete);
//Condicao
routes.get("/condicao", condicaoController_1.CondicaoController.getAll);
routes.post("/condicao", validations_2.CondicaoValidation.create, condicaoController_1.CondicaoController.create);
routes.get("/condicao/:id", condicaoController_1.CondicaoController.getOne);
routes.delete("/condicao/:id", validations_2.CondicaoValidation.destroy, condicaoController_1.CondicaoController.delete);
routes.put("/condicao/:id", validations_2.CondicaoValidation.update, condicaoController_1.CondicaoController.update);
//Endereço
routes.get("/endereco", enderecoController_1.EnderecoController.getAll);
routes.get("/endereco/:id", enderecoController_1.EnderecoController.getOne);
routes.post("/endereco", enderecoController_1.EnderecoController.create);
routes.put("/endereco/:id", enderecoController_1.EnderecoController.update);
routes.delete("/endereco/:id", validations_4.EnderecoValidation.destroy, enderecoController_1.EnderecoController.delete);
//produtos
routes.get("/produtos", FindAllProdutoController_1.FindAllProdutoController.listarTodos);
routes.get("/produto/:id", FindOneProdutoController_1.FindOneProdutosController.umProduto);
routes.delete("/produto/:id", DestroyProdutoController_1.DestroyProdutoController.delete);
routes.put("/produto/:id", UpdateProdutoController_1.updateProdutoController.update);
routes.post("/produto", CreateProdutoController_1.CreateProdutoController.create);
exports.default = routes;
