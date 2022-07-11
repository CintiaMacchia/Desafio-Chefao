<<<<<<< HEAD
const { Produtos } = require('../models/produto')
require('dotenv').config();
=======
const Produtos = require("../models/produto")
>>>>>>> 3d12aceeec85c81cfe66b7b13c9dcc754986a2ff

export const UpdateProdutoUseCase = {
    async atualizarPrduto(params) {
        const { id } = params;
    }
}