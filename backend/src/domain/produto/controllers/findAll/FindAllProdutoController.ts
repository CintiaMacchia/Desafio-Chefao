import { Request, Response } from "express";
import { FindAllProdutosUseCase } from "../../useCase/findAllProdutosUseCase";

export const FindAllProdutoController = {
  async listarTodos(req: Request, res: Response) {
    try {
      const produtos = await FindAllProdutosUseCase.ListarProdutos();
      return res.json(produtos);
    } catch (error) {
      console.log(error);
      return res.status(500).json(error);
    }
  },
};
