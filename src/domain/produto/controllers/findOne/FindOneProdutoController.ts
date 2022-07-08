import { FindOneProdutosUseCase } from './../../useCase/findOneProdutosUseCase';
import {Request, Response} from "express";

export const FindOneProdutosController ={
    async umProduto(req: Request, res:Response){
        try {
            const umProduto = await FindOneProdutosUseCase.umProduto(req.params);
            return res.json(umProduto);
        } catch (error) {
            console.log(error)
            return res.status(500).json(error);
        }
    }
}