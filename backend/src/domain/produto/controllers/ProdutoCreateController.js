import { CreateProdutoUseCase } from '../useCase/createProdutoUseCase';
import { Request, Response } from "express"
//import cloudinary from "cloudinary/";
const Produtos = ('../models/produto')

const fs = require('fs');
const cloudinary = require('../../../shared/infrastructure/config/cloudinary');
const imagemFolder = 'images/'


//interface AuthRequest extends Request{ files: any}

module.exports = CreateProdutoController = {
    async create(req, res) {
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

        const novoProduto = await Produtos.create({
            ...req.body
        })

        // console.log(req.)
        return res.status(201).json({ dadosfinais: novoProduto })
    }


}