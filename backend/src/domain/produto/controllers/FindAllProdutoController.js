import { FindAllProdutosUseCase } from "../useCase/findAllProdutoUseCase";

export const FindAllProdutoController = {
    async listarTodos(req, res) {
        try {
            const produtos = await FindAllProdutosUseCase.ListarProdutos();
            return res.json(produtos);
        } catch (error) {
            console.log(error);
            return res.status(500).json(error);
        }
    },
};