"use strict";
var __awaiter = (this && this.__awaiter) || function(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function(resolve) { resolve(value); }); }
    return new(P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }

        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }

        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function(mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateProdutoController = void 0;
const produto_1 = require("../models/produto");
//import upload from '../../../shared/infrastructure/config/upload';
//import multer from 'multer';
const fs = require('fs');
//const cloudinary_1 = __importDefault(require("../../../config/cloudinary"));
const cloudinary = require('../../../config/cloudinary')
const imagemFolder = 'images/';
//const path = require('path')
//interface AuthRequest extends Request{ files: any}
exports.CreateProdutoController = {
    create(req, res) {
        return __awaiter(this, void 0, void 0, function*() {
            const file = req.files[0].;
            const uploadPath = yield cloudinary.uploads(file.path, 'fotos');
            fs.unlinkSync(file.path)
            const novoProduto = yield produto_1.Produtos.create(Object.assign(Object.assign({}, req.body), {

                fotos: uploadPath.imageUrl
            }));
            console.log(req.files[0]);
            // console.log(req.)
            return res.status(201).json({ dadosfinais: novoProduto });
        });
    }
    // async create(req: Request, res: Response) {
    //  const file = req.originalUrl[0];
    //   const uploadPath = await cloudinary.uploads(file.path, 'images')  //2 parametros - arquivo - pasta
    //  fs.unlinkSync(file.path)
    //       console.log(uploadPath.imageUrl)
    //   const novoProduto = await Produtos.create({
    //       ...req.body,
    //       //forma de upload na aplicação
    //       //image: imageFolder + file.filename,
    //       //com cloudinary
    //       image: uploadPath.imageUrl
    //   })
    //   //console.log(file);
    //   return res.status(201).json({novoProduto})
};
// try {
//   const novoProduto = await CreateProdutoUseCase.createProduto(req.body);
//   return res.status(201).json(novoProduto);
// } catch (error) {
//   return res.status(500).json("Algo deu errado, tente de novo mais tarde!");
// }
// }