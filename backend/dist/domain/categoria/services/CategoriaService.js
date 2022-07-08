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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoriaService = void 0;
const categoria_1 = require("../models/categoria");
//import bcrypt from "bcrypt";
//import jwt from 'jsonwebtoken';
const dotenv = __importStar(require("dotenv"));
dotenv.config();
class CategoriaService {
    cadatrarCategoria(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const novaCategoria = yield categoria_1.Categoria.create(Object.assign({}, data));
            return novaCategoria;
        });
    }
    updateCategoria(data, params, auth) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = params;
            const payloadUpdate = {};
            if (auth.id != id) {
                return;
            }
            Object.assign(payloadUpdate, data);
            yield categoria_1.Categoria.update(Object.assign({}, payloadUpdate), {
                where: { id },
            });
            const trocarCategoria = yield categoria_1.Categoria.findByPk(id);
            return trocarCategoria;
        });
    }
    excluirCategoria(params, auth) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = params;
            if (auth.id != id) {
                return;
            }
            yield categoria_1.Categoria.destroy({
                where: { id }
            });
            return;
        });
    }
    listarCategorias() {
        return __awaiter(this, void 0, void 0, function* () {
            const listarCategorias = yield categoria_1.Categoria.findAll();
            return listarCategorias;
        });
    }
    umaCategoria(params) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = params;
            const umaCategoria = yield categoria_1.Categoria.findByPk(id);
            return umaCategoria;
        });
    }
}
exports.CategoriaService = CategoriaService;
