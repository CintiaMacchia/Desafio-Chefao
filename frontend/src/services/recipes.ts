import axios from "axios"

interface Recipe {
    id: number;
    titulo: string;
    foto: string;
    nome: string;
    descricao: string;
    valor: number;
    categoria_id: {
          references: {
             categoria:string;
              id: number;
    },
     usuario_id: {
    
          references: {
              usuarios:string;
             id: number;
          }
  
     }
  
  }
  }

const baseUrl = axios.create({
    baseURL: "http://localhost:3333"
})

export const getRecipes = async (): Promise<Recipe[]> => {
    try {
        const response = await baseUrl.get("/recipes")
        return response.data
    } catch (error) {
        throw new Error("Não foi possivel pegar os dados")
    }
}

export const postRecipes = async(newRecipe: Omit<Recipe, "id">): Promise<Recipe> => {
    try {
        const response = await baseUrl.post("/produtos", newRecipe)
        return response.data
    } catch (error) {
        throw new Error("Não foi possivel pegar os dados")
    }
}