const { Produtos } = require('../models')
const cloudinary = require('../../../../src/config/cloudinary')
const fs = require('fs');

const imageFolder = 'images/'

export const ProdutoController = {
    async create(req, res) {

        const file = req.files[0]
        const uploadPath = await cloudinary.uploads(file.path, 'Produtos') //2 parametros - arquivo - pasta
        fs.unlinkSync(file.path)
        console.log(uploadPath.imageUrl)
        console.log(req.files[0])
        const novoProduto = await Produtos.create({
            ...req.body,
            //forma de upload na aplicação
            foto: imageFolder + file.filename,

            //com cloudinary
            // foto: uploadPath.imageUrl
        })

        console.log(req.files[0])

        return res.status(201).json({ dadosfinais: Produtos })

    }
}

module.exports = ProdutoController