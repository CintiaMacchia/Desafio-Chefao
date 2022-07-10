import { CreateProdutoUseCase } from '../useCase/createProdutoUseCase';
import { Request, Response } from "express"

import { Produtos } from '../models/produto';
//import upload from '../../../shared/infrastructure/config/upload';
//import multer from 'multer';
const fs = require('fs');
//         returnimport cloudinary from '../../../config/cloudinary'
const cloudinary = require('../../../config/cloudinary')
const imagemFolder = 'images/';
//const path = require('path')




//interface AuthRequest extends Request{ files: any}

export const CreateProdutoController = {
    async create(req, res) {

        const file = req.files[0]

        const uploadPath = await cloudinary.uploads(file.path, 'fotos')

        const novoProduto = await Produtos.create({
            ...req.body,
            //foto: uploadPath.imageUrl
            fotos: uploadPath.imageUrl
        })
        console.log(req.files)
            // console.log(req.)
        return res.status(201).json({ dadosfinais: novoProduto })
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

}


// try {
//   const novoProduto = await CreateProdutoUseCase.createProduto(req.body);
//   return res.status(201).json(novoProduto);
// } catch (error) {
//   return res.status(500).json("Algo deu errado, tente de novo mais tarde!");
// }
// }