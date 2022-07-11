const FindOneProdutosUseCase = ('../useCase/findOneProdutoUseCase')
    //import { Request, Response } from "express";
module.exports = FindOneProdutosController = {
    async umProduto(req, res) {
        try {
            const umProduto = await FindOneProdutosUseCase.umProduto(req.params);
            return res.json(umProduto);
        } catch (error) {
            console.log(error)
            return res.status(500).json(error);
        }
    }
}