import { CreateProdutoUseCase } from "../../useCase/createProdutoUseCase";
import { Request, Response } from "express"

export const CreateProdutoController ={
  async create(req: Request, res: Response) {
    try {
      const novoProduto = await CreateProdutoUseCase.createProduto(req.body);
      return res.status(201).json(novoProduto);
    } catch (error) {
      return res.status(500).json("Algo deu errado, tente de novo mais tarde!");
    }
  }
}
