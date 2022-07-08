import { Produtos } from "../models/produto";
import { Request, Response } from "express"
import * as dotenv from "dotenv"
dotenv.config()

export const CreateProdutoUseCase ={

  async createProduto(data: any) {
    try {
      const categoria_id = data.auth.id;
      const usuario_id = data.auth.id;
      const condicao_id = data.auth.id;
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
