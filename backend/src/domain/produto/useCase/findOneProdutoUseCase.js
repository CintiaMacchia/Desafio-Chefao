const Produtos = require("../models/produto")

export const FindOneProdutosUseCase = {
    async umProduto(params) {
        const { id } = params;
        const oneProduto = await Produtos.findByPk(id);
        return oneProduto;
    }
}