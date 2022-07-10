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
exports.CondicaoController = void 0;
const services_1 = require("../services");
const condicao_1 = require("../models/condicao");
exports.CondicaoController = {
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const novaCondicao = yield services_1.condicaoService.cadastrarCondicao(req.body);
                return res.status(201).json(novaCondicao);
            }
            catch (error) {
                return res.status(500).json(error);
            }
        });
    },
    // async update(req: Request, res: Response) {
    //     try {
    //         const updateCondicao = await condicaoService.alterarCondicao(req.body, req.params, req.body.auth);
    //         return res.status(200).json(updateCondicao);
    //     } catch (error) {
    //         return res.status(500).json(error);
    //     }
    // },
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                const { condicao } = req.body;
                const existeId = yield condicao_1.Condicao.count({
                    where: {
                        id: id,
                    }
                });
                if (!existeId) {
                    return res.status(400).json('Condição de produto não localizada');
                }
                const updateCategoria = yield condicao_1.Condicao.update({ condicao }, { where: {
                        id: id
                    }
                });
                res.json({ message: "Condição  Atualizada" }).status(201);
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
                const existeId = yield condicao_1.Condicao.count({
                    where: {
                        id: id,
                    }
                });
                if (!existeId) {
                    return res.status(400).json('Categoria não encontrada');
                }
                yield condicao_1.Condicao.destroy({
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
    // async delete(req: Request, res: Response) {
    //     try {
    //         const deletarCondicao = await condicaoService.excluirCondicao(req.params, req.body.auth);
    //         return res.sendStatus(204).json(deletarCondicao)
    //     } catch (error) {
    //         return res.status(500).json(error);
    //     }
    // },
    getAll(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const condicao = yield services_1.condicaoService.todasCondicoes();
                return res.json(condicao);
            }
            catch (error) {
                return res.status(500).json(error);
            }
        });
    },
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const condicao = yield services_1.condicaoService.umaCondicao(req.params);
                return res.json(condicao);
            }
            catch (error) {
                return res.status(500).json(error);
            }
        });
    }
};
