import baseApi from "./config";

interface ProdutoPayload {

    titulo: string;
    foto: string;
    nome: string;
    descricao: string;
    valor: number;
  
  }

  export function cadastrarProduto(payload: ProdutoPayload) {
    return baseApi.post("/produtos", payload);
  }
  export function listarProdutos() {
    return baseApi.get("/produtos");
  }