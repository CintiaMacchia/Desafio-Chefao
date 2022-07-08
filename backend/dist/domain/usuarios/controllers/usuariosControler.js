"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsuarioController = void 0;
const services_1 = require("../services");
//interface AuthRequest extends Request{ auth: any}
exports.UsuarioController = {
    login(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const accessToken = yield services_1.usuarioService.loginUsuario(req.body);
                if (!accessToken) {
                    return res.status(401).json("E-mail ou senha inválido, verifique e tente novamente");
                }
                return res.status(200).json(accessToken);
            }
            catch (error) {
                return res.status(500).json(error);
            }
        });
    },
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const novoUsuario = yield services_1.usuarioService.cadastrarUsuario(req.body);
                return res.status(201).json(novoUsuario);
            }
            catch (error) {
                return res.status(500).json(error);
            }
        });
    },
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const usuarioAlterado = yield services_1.usuarioService.alterarUsuario(req.body, req.params, req.body.auth);
                return res.status(200).json(usuarioAlterado);
            }
            catch (error) {
                return res.status(500).json(error);
            }
        });
    },
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield services_1.usuarioService.excluirUsuario(req.params, req.body.auth);
                return res.sendStatus(204);
            }
            catch (error) {
                console.log(error);
                return res.status(500).json(error);
            }
        });
    },
    getAll(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const usuarios = yield services_1.usuarioService.todosUsuarios();
                return res.json(usuarios);
            }
            catch (error) {
                console.log(error);
                return res.status(500).json(error);
            }
        });
    },
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const usuario = yield services_1.usuarioService.umUsuario(req.params);
                return res.json(usuario);
            }
            catch (error) {
                console.log(error);
                return res.status(500).json(error);
            }
        });
    },
};
