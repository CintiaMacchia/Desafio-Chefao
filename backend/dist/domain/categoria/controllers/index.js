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
const categoria_1 = require("../models/categoria");
//interface AuthRequest extends Request{ auth: any } 
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
    //     async update(req:Request, res:Response) {
    //         try {
    //             const alterarCategoria = await categoriaService.updateCategoria(req.body, req.params);
    // return res.status(200).json(alterarCategoria)
    //         } catch (error) {
    //             return res.status(500).json(error)
    //         }
    //     },
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                const { categoria } = req.body;
                const existeId = yield categoria_1.Categoria.count({
                    where: {
                        id: id,
                    }
                });
                if (!existeId) {
                    return res.status(400).json('Categoria não encontrada');
                }
                const updateCategoria = yield categoria_1.Categoria.update({ categoria }, { where: {
                        id: id
                    }
                });
                res.json({ message: "Categoria Atualizada" }).status(201);
            }
            catch (error) {
                return res.status(500).json(error);
            }
        });
    },
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                const existeId = yield categoria_1.Categoria.count({
                    where: {
                        id: id,
                    }
                });
                if (!existeId) {
                    return res.status(400).json('Categoria não encontrada');
                }
                yield categoria_1.Categoria.destroy({
                    where: {
                        id: id
                    }
                });
                return res.status(204).json('categoria deletada');
            }
            catch (error) {
                return res.status(500).json("Falha ao deletar a categoria");
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
