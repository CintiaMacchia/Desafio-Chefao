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
exports.CategoriaController = void 0;
const services_1 = require("../services");
exports.CategoriaController = {
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const novaCategoria = yield services_1.categoriaService.cadatrarCategoria(req.body);
                return res.status(200).json(novaCategoria);
            }
            catch (error) {
                return res.status(500).json(error);
            }
        });
    },
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const alterarCategoria = yield services_1.categoriaService.updateCategoria(req.body, req.params);
                return res.status(200).json(alterarCategoria);
            }
            catch (error) {
                return res.status(500).json(error);
            }
        });
    },
    delet(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield services_1.categoriaService.excluirCategoria(req.params, req.auth);
                return res.sendStatus(204);
            }
            catch (error) {
                return res.status(500).json(error);
            }
        });
    },
    getAll(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const categorias = yield services_1.categoriaService.listarCategorias();
                return res.json(categorias);
            }
            catch (error) {
                return res.status(500).json(error);
            }
        });
    },
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const categoria = yield services_1.categoriaService.umaCategoria(req.params);
                return res.json(categoria);
            }
            catch (error) {
                return res.status(500).json(error);
            }
        });
    }
};
