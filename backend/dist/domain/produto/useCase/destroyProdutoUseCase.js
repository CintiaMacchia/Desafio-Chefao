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
exports.DestroyProdutosUseCase = void 0;
const produto_1 = require("../models/produto");
//import * as dotenv from "dotenv"
//dotenv.config()
exports.DestroyProdutosUseCase = {
    //     async deleteProduto(params: any,){
    //         const { id } = params;
    //         if(id !=  id){
    //             return 
    //         }
    //         else{
    //             await Produtos.destroy({
    //                 where: {
    //                     id,
    //                 },
    //             });
    //             return 
    //         }
    //     }
    // }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                const existeId = yield produto_1.Produtos.count({
                    where: {
                        id: id,
                    }
                });
                if (!existeId) {
                    return res.status(400).json({ message: 'Endereco não encontrado' });
                }
                yield produto_1.Produtos.destroy({
                    where: {
                        id: id
                    }
                });
                return res.status(204).json({ message: 'Endereco deletado' });
            }
            catch (error) {
                return res.status(500).json(error);
            }
        });
    },
};
