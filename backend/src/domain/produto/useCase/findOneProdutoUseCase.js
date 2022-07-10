import { Produtos } from "../models/produto"
import { Request, Response } from "express";

export const FindOneProdutosUseCase = {
    async umProduto(params) {
        const { id } = params;
        const oneProduto = await Produtos.findByPk(id);
        return oneProduto;
    }
}