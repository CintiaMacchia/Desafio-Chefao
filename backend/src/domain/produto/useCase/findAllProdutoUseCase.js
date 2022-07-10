const Produtos = require("../models/produto")
const dotenv = require("dotenv")
dotenv.config();

export const FindAllProdutosUseCase = {
  async ListarProdutos() {
    const todosProdutos = await Produtos.findAll();
    return todosProdutos;
  },
};
