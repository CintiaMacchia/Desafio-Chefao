const { Produtos } = require('../models/produto')
require('dotenv').config();

const FindAllProdutosUseCase = {
    async ListarProdutos() {
        const todosProdutos = await Produtos.findAll();
        return todosProdutos;
    },
};

module.exports = FindAllProdutosUseCase