// import { Produtos } from "../models/produto"
// import { Request, Response } from "express";

const { Produtos } = require('../models/produto')
require('dotenv').config();

export const FindOneProdutosUseCase = {
    async umProduto(params) {
        const { id } = params;
        const oneProduto = await Produtos.findByPk(id);
        return oneProduto;
    }
}