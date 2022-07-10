import {Produtos} from "../models/produto"
import {Request, Response} from "express";

export const FindOneProdutosUseCase ={
    async umProduto(params: any){
        const {id} = params;
        const oneProduto = await Produtos.findByPk(id);
        return oneProduto;
    }
}