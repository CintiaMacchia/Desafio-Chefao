const { Produtos } = require('../models/produto')
const cloudinary = require('../../../config/cloudinary')
const fs = require('fs');
const db = require('../../../shared/infrastructure/database');
//const { CreateProdutoUseCase } = require('../useCase/createProdutoUseCase')
//const imagemFolder = 'images/';

const CreateProdutoController = {
    async create(req, res) {
        try {
            const file = req.files[0]
            const uploadPath = await cloudinary.uploads(file.path, 'foto') //2 parametros - arquivo - pasta
            fs.unlinkSync(file.path)
            console.log(req.files[0].path)

            //console.log(uploadPath.imageUrl)
            const novoProduto = await Produtos.create({
                ...req.body,
                //forma de upload na aplicação
                //image: imageFolder + file.filename,
                //com cloudinary
                foto: uploadPath.imageUrl
            })
            return res.status(201).json({ dadosfinais: novoProduto })
        } catch (error) {
            return res.status(500).json(error)
            console.log(error)
        }




    },



}
module.exports = CreateProdutoController

// try {
//   const novoProduto = await CreateProdutoUseCase.createProduto(req.body);
//   return res.status(201).json(novoProduto);
// } catch (error) {
//   return res.status(500).json("Algo deu errado, tente de novo mais tarde!");
// }
// }

// const novoProduto = await CreateProdutoUseCase.createProduto(req.body);
// return res.status(201).json(novoProduto);

// fotos: uploadPath.imageUrl

//return res.status(201).json("Produto Cadastrado!")
// }
// catch (error) {

// }
// // const file = req.files[0]
// const uploadPath = await cloudinary.uploads(file.path, 'fotos')
// fs.unlinkSync(file.path)

// console.log(req.files[0])
// console.log(req.)
// return res.status(201).json({ dadosfinais: novoProduto })

//////////////////////////////////

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