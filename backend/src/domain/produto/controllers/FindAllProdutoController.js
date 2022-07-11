//const FindAllProdutosUseCase = ("../useCase/findAllProdutoUseCase")
const { Produtos } = require('../models/produto')
const FindAllProdutosUseCase = require('../useCase/findAllProdutoUseCase')

const FindAllProdutoController = {
    async getAll(req, res) {
        try {
            const ListarProdutos = await Produtos.FindAllProdutosUseCase()
            return res.json(ListarProdutos);
        } catch (error) {
            console.log(error)
            return res.status(500).json(error);

        }
    },
};

module.exports = FindAllProdutoController