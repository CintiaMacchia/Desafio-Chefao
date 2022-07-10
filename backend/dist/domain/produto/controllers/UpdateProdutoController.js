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
exports.updateProdutoController = void 0;
const produto_1 = require("../models/produto");
//import cloudinary from '../../../config/cloudinary'
exports.updateProdutoController = {
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                const { nome, descricao, valor, categoria_id, usuario_id, condicao_id } = req.body;
                const existId = yield produto_1.Produtos.count({
                    where: {
                        id: id,
                    }
                });
                if (!existId) {
                    return res.status(400).json('Produto não encontrado');
                }
                const updateProduto = yield produto_1.Produtos.update({ nome, descricao, valor, categoria_id, usuario_id, condicao_id }, {
                    where: {
                        id: id,
                    }
                });
                res.json({ message: updateProduto }).status(201);
            }
            catch (error) {
                res.status(404).json('Verfique os dados e tente novamente');
                console.error(error);
            }
            ;
        });
    },
};
