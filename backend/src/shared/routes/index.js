const express = require('express');
const routes = express.Router();

import {UsuarioValidation} from '../../domain/usuarios/validations/index'
import {UsuarioController} from '../../domain/usuarios/controllers/usuariosControler'



routes.post("/login", UsuarioController.login);
routes.post("/users", UsuarioController.create);
routes.get("/users",   UsuarioController.getAll);
routes.get("/users/:id",  UsuarioValidation.getOne, UsuarioController.getOne);
routes.put("/users/:id",  UsuarioValidation.update, UsuarioController.update);
routes.delete("/users/:id",  UsuarioValidation.destroy, UsuarioController.delete);


module.exports = routes;
