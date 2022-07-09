import express from 'express'
//const express = require('express')
const routes = express.Router()

import { UsuarioValidation } from '../../domain/usuarios/validations';
import { UsuarioController } from '../../domain/usuarios/controllers/usuariosControler'
import { CondicaoController } from '../../domain/condicao/controllers/condicaoController';
//import { CategoriaValidation } from '../../domain/categoria/validations';
<<<<<<< HEAD:backend/src/shared/routes/index.ts
import { CategoriaController } from '../../domain/categoria/controllers';
import { EnderecoController } from '../../domain/endereco/controllers/endereco.controller';
//import { authController } from '../../domain/usuarios/controllers/authController';
=======
import { CategoriaController } from '../../domain/categoria/controllers'
import { EnderecoController } from '../../domain/endereco/controllers/enderecoController'
>>>>>>> 405e2939819e3de9eaa95b0212872cacf98ac909:src/shared/routes/index.ts

import auth from '../middlewares/auth';
import { loginValidation} from '../../domain/usuarios/validations/usuarios/login'

//usuarios

routes.post("/users", UsuarioController.create);
routes.get("/users", UsuarioController.getAll);
routes.get("/users/:id", UsuarioValidation.getOne, UsuarioController.getOne);
routes.put("/users/:id", UsuarioController.update);
routes.delete("/users/:id", UsuarioValidation.destroy, UsuarioController.delete);



//categoria
routes.post("/categoria", CategoriaController.create);
routes.get("/categoria/:id", CategoriaController.getOne);
routes.get("/categorias", CategoriaController.getAll)
<<<<<<< HEAD:backend/src/shared/routes/index.ts
routes.put("/categoria/:id", CategoriaController.update)
routes.delete("/categoria/:id", CategoriaController.delete)
=======
routes.put("categoria/:id", CategoriaController.update)
//routes.delete("categoria/:id", CategoriaController.delet)
>>>>>>> 405e2939819e3de9eaa95b0212872cacf98ac909:src/shared/routes/index.ts

//Condicao
routes.get("/condicao", CondicaoController.getAll)
routes.post("/condicao", CondicaoController.create)
routes.get("/condicao/:id", CondicaoController.getOne)
routes.delete("/condicao/:id", CondicaoController.delete)
routes.put("/condicao/:id", CondicaoController.update)

<<<<<<< HEAD:backend/src/shared/routes/index.ts

//endereco
routes.get("/endereco", EnderecoController.getAll);
routes.get("/endereco/:id", EnderecoController.getOne);
routes.post("/endereco", EnderecoController.create)
routes.put("/endereco/:id", EnderecoController.update)
routes.delete("/endereco/:id", EnderecoController.delete)


//loginUsuario
routes.post("/login",loginValidation, auth, UsuarioController.login)

// routes.post("/login", loginValidation, auth, UsuarioValidation.create);
=======
//Endereço
routes.get("/enderecos", EnderecoController.getAll)
//routes.post("/endereco", EnderecoController.create)
routes.get("/endereco/:id", EnderecoController.getOne)
>>>>>>> 405e2939819e3de9eaa95b0212872cacf98ac909:src/shared/routes/index.ts

export default routes;