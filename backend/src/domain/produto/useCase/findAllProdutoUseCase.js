<<<<<<< HEAD
// import { Produtos } from "../models/produto";
// import { Request, Response } from "express";
// import * as dotenv from "dotenv";
=======
const Produtos = require("../models/produto")
const dotenv = require("dotenv")
>>>>>>> 3d12aceeec85c81cfe66b7b13c9dcc754986a2ff
dotenv.config();
const { Produtos } = require('../models/produto')
require('dotenv').config();

export const FindAllProdutosUseCase = {
    async ListarProdutos() {
        const todosProdutos = await Produtos.findAll();
        return todosProdutos;
    },
};