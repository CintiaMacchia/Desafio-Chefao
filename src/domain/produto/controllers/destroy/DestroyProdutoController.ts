import { Request, Response } from "express";
import { DestroyProdutosUseCase } from "../../useCase/destroyProdutosUseCase";
import { isConstructorDeclaration } from "typescript";

export const DestroyProdutoController = {
  async destroy(req: Request, res: Response) {
    try {
      await DestroyProdutosUseCase.deleteProduto(req.params, req.body.auth);
      return res.sendStatus(204);
    } catch (error) {
      console.log(error);
      return res.status(500).json(error);
    }
  },
};
