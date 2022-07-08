import { Produtos } from "../models/produto";
import { Request, Response } from "express"
import * as dotenv from "dotenv"
dotenv.config()

export const DestroyProdutosUseCase ={

    async deleteProduto(params: any, auth: any){
        const { id } = params;

        if(auth.id !=  id){
            return 
        }
        
        else{
            await Produtos.destroy({
                where: {
                    id,
                },
            });
            return
        }
    }
}