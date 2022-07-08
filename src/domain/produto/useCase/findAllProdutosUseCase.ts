import { Produtos } from "../models/produto";
import { Request, Response } from "express";
import * as dotenv from "dotenv";
dotenv.config();

export const FindAllProdutosUseCase = {
  async ListarProdutos() {
    const todosProdutos = await Produtos.findAll();
    return todosProdutos;
  },
};
