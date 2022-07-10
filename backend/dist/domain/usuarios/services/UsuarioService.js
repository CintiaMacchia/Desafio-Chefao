"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsuarioService = void 0;
const usuario_1 = require("../models/usuario");
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const dotenv = __importStar(require("dotenv"));
dotenv.config();
class UsuarioService {
    loginUsuario(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const { email, senha } = data;
            const usuario = yield usuario_1.Usuarios.findOne({
                where: {
                    email,
                },
            });
            if (!usuario || !bcrypt_1.default.compareSync(senha, usuario.senha)) {
                return;
            }
            const token = jsonwebtoken_1.default.sign({
                id: usuario.id,
                email: usuario.email,
                name: usuario.nome,
                senha: usuario.senha,
            }, process.env.SECRET_KEY);
            return token;
        });
    }
    cadastrarUsuario(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const { senha } = data;
            const novaSenha = bcrypt_1.default.hashSync(senha, 10);
            const novoUsuario = yield usuario_1.Usuarios.create(Object.assign(Object.assign({}, data), { senha: novaSenha }));
            return novoUsuario;
        });
    }
    alterarUsuario(data, params) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = params;
            const { senha } = data;
            const payloadUpdate = {};
            if (id != id) {
                return;
            }
            Object.assign(payloadUpdate, data);
            if (senha) {
                const novaSenha = bcrypt_1.default.hashSync(senha, 10);
                Object.assign(payloadUpdate, { senha: novaSenha });
            }
            yield usuario_1.Usuarios.update(Object.assign({}, payloadUpdate), {
                where: { id },
            });
            const usuario = yield usuario_1.Usuarios.findByPk(id);
            return usuario;
        });
    }
    // async excluirUsuario(params: any, auth: any) {
    //     const { id } = params;
    //     if(auth.id != id){
    //         return
    //     }
    //     await Usuarios.destroy({
    //         where: {
    //             id,
    //         },
    //     });
    //     return
    // }
    todosUsuarios() {
        return __awaiter(this, void 0, void 0, function* () {
            const todosOsUsuarios = yield usuario_1.Usuarios.findAll();
            return todosOsUsuarios;
        });
    }
    umUsuario(params) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = params;
            const usuarioUnico = yield usuario_1.Usuarios.findByPk(id);
            return usuarioUnico;
        });
    }
}
exports.UsuarioService = UsuarioService;
