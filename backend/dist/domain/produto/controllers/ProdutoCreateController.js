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
exports.CreateProdutoController = void 0;
//import cloudinary from "cloudinary/";
const produto_1 = require("../models/produto");
const fs = require('fs');
const cloudinary = require('../../../shared/infrastructure/config/cloudinary');
const imagemFolder = 'images/';
//interface AuthRequest extends Request{ files: any}
exports.CreateProdutoController = {
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            // try {
            //     const { nome, descricao, valor, categoria_id, usuario_id, condicao_id } = req.body;
            //     const file = req.
            //     const uploadPath = await cloudinary.uploads(file.path, 'images')
            //     fs.unlinkSync(file.path);
            //     const novoProduto = await Produtos.create({
            //         ...req.body,
            //         image: uploadPath.imageUrl
            //     })
            //     return res.status(201).json(novoProduto)
            // } catch (error) {
            //     res.status(500).json(error)
            // }
            const novoProduto = yield produto_1.Produtos.create(Object.assign({}, req.body));
            // console.log(req.)
            return res.status(201).json({ dadosfinais: novoProduto });
        });
    }
};
