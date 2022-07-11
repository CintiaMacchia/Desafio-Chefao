//const FindAllProdutosUseCase = ("../useCase/findAllProdutoUseCase")
//const FindAllProdutosUseCase = require('../useCase/findAllProdutoUseCase')
const  Produtos  = require('../models/produto')
require('dotenv').config();

const FindAllProdutoController = {
    async getAll(req, res) {
        try {
            const ListarProdutos = await Produtos.findAll()
            return res.json(ListarProdutos);
        } catch (error) {
            console.log(error)
            return res.status(500).json(error);

        }
    },
};

module.exports = FindAllProdutoController