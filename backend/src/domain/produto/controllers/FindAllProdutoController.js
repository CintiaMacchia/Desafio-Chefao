const Produtos = require('../models/produto');
const findAllProdutoUseCase = require('../useCase/findAllProdutoUseCase')


const ProdutoController = {
    async getAll(req, res) {
        try {

            const ListarProdutos = await findAllProdutoUseCase.ListarProdutos();

            return res.status(204).json(ListarProdutos);

        } catch (error) {
            return res.status(500).json(error);
        }
    },

}

module.exports = ProdutoController