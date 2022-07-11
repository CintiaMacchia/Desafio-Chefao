const Produtos = require('../models/produto')
const cloudinary = require('../../../config/cloudinary')
const fs = require('fs');
const db = require('../../../shared/infrastructure/database');
const { fstat } = require('fs');
//const { CreateProdutoUseCase } = require('../useCase/createProdutoUseCase')
//const imagemFolder = 'images/';

const CreateProdutoController = {
    async create(req, res) {
        try {
            const { nome, descricao, valor, foto, categoria_id, usuario_id, condicao_id } = req.body;
            const file = req.files[0];

            const uploadPath = await cloudinary.uploads(file.path, "fotoAnuncio")
            fs.unlinkSync(file.path)
                //console.log(uploadPath)
            const novoProduto = await Produtos.create({
                ...req.body,
                foto: uploadPath.imageUrl
            });
            console.log(req.files[0])
            return res.json(novoProduto)

            //res.json({ message: 'Dados atualizados com sucesso' }).status(201);
        } catch (error) {
            res.status(404).json('Verfique os dados e tente novamente');
            console.error(error);
        };
    },

}




module.exports = CreateProdutoController