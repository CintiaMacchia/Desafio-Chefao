//const FindOneProdutosUseCase = ('../useCase/findOneProdutoUseCase')
const Produtos = require('../models/produto')
    //import { Request, Response } from "express";
const FindOneProdutosController = {
    async getOne(req, res) {
        try {
            const { id } = req.params;


            const umProduto = await Produtos.findByPk(id);


            return res.json(umProduto)
        } catch (error) {
            return res.status(500).json('Produto não encontrado!')
        }
    }
}

module.exports = FindOneProdutosController