import baseUrl from "./config";

interface ProdutoPayload {
    idProduto:number,
    titulo: string;
    foto: string;
    nome: string;
    descricao: string;
    valor: number;
  
  }

  export function cadastrarProduto(payload: ProdutoPayload) {
    return baseUrl.post("/produtos", payload);
  }


  export function listarProdutos() {
    try {
      const response = await baseUrl.get("/produtos");

    return response.data
  }  } catch (error) {
    throw new Error("Não foi possivel pegar os dados")
}
}





