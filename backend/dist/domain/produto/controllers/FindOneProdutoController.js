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
exports.FindOneProdutosController = void 0;
const findOneProdutoUseCase_1 = require("../useCase/findOneProdutoUseCase");
exports.FindOneProdutosController = {
    umProduto(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const umProduto = yield findOneProdutoUseCase_1.FindOneProdutosUseCase.umProduto(req.params);
                return res.json(umProduto);
            }
            catch (error) {
                console.log(error);
                return res.status(500).json(error);
            }
        });
    }
};
