<<<<<<< HEAD
// import { Produtos } from "../models/produto"
// import { Request, Response } from "express";

const { Produtos } = require('../models/produto')
require('dotenv').config();
=======
const Produtos = require("../models/produto")
>>>>>>> 3d12aceeec85c81cfe66b7b13c9dcc754986a2ff

export const FindOneProdutosUseCase = {
    async umProduto(params) {
        const { id } = params;
        const oneProduto = await Produtos.findByPk(id);
        return oneProduto;
    }
}