const { Produtos } = require('../models/produto')
require('dotenv').config();



const CreateProdutoUseCase = {

    async createProduto(data) {
        try {
            const categoria_id = data.id;
            const usuario_id = data.id;
            const condicao_id = data.id;
            const { descricao, valor, foto } = data.body;

            const novoProduto = await Produtos.create({
                descricao,
                valor,
                foto,
                categoria_id,
                usuario_id,
                condicao_id,
            });
            return novoProduto;
        } catch (error) {
            return error;
        }
    }
}
module.exports = CreateProdutoUseCase