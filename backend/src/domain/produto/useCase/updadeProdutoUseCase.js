const { Produtos } = require('../models/produto')
require('dotenv').config();

export const UpdateProdutoUseCase = {
    async atualizarPrduto(params) {
        const { id } = params;
    }
}