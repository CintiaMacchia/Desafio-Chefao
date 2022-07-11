require('dotenv').config();

const Produtos = require("../models/produto")


const FindOneProdutosUseCase = {
    async umProduto(params) {
        const { id } = params;
        const oneProduto = await Produtos.findByPk(id);
        return oneProduto;
    }
}
module.exports = FindOneProdutosUseCase