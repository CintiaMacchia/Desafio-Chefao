import { Request, Response } from "express";
import { categoriaService } from "../services";
//import { Categoria } from "../models/categoria";

interface AuthRequest extends Request{ auth: any } 

export const CategoriaController = {

    async create(req: Request, res:Response){
        try {
            const novaCategoria = await categoriaService.cadatrarCategoria(req.body);
            return res.status(200).json(novaCategoria);
        } catch (error) {
            return res.status(500).json(error);
        }
    },

    async update(req:Request, res:Response) {
        try {
            const alterarCategoria = await categoriaService.updateCategoria(req.body, req.params);
return res.status(200).json(alterarCategoria)
        } catch (error) {
            return res.status(500).json(error)
        }
    },

    async delet(req:AuthRequest, res:Response){
        try {
            await categoriaService.excluirCategoria(req.params, req.auth);
            return res.sendStatus(204);
        } catch (error) {
            return res.status(500).json(error)
        }
    },

    async getAll(req:Request, res:Response){
        try {
            const categorias = await categoriaService.listarCategorias();
            return res.json(categorias);
        } catch (error) {
            return res.status(500).json(error);
        }
    },

    async getOne(req:Request, res:Response){
try {
    const categoria = await categoriaService.umaCategoria(req.params);
    return res.json(categoria)
} catch (error) {
    return res.status(500).json(error)
}
    }


    

}