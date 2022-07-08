import { Categoria } from "../models/categoria";
//import bcrypt from "bcrypt";
//import jwt from 'jsonwebtoken';
import * as dotenv from "dotenv";
dotenv.config();

export class CategoriaService{
    async cadatrarCategoria(data: any){
        const novaCategoria = await Categoria.create({
            ...data
        });
        return novaCategoria;
    }

    async updateCategoria(data: any, params: any){
        const { id } = params;
        const payloadUpdate = {};

        if(!id ===id ){
            return
        }
        Object.assign(payloadUpdate, data);

        await Categoria.update({
            ...payloadUpdate,
        }, {
            where:{ id },
        });
        const trocarCategoria = await Categoria.findByPk(id);
        return trocarCategoria;
    }

    async excluirCategoria(params: any, auth: any){
        const { id } = params;

        if(auth.id != id){
            return
        }

        await Categoria.destroy({
            where: {id}
        });
        return
    }
   
    async listarCategorias(){
        const listarCategorias = await Categoria.findAll();
        return listarCategorias;
    }

    async umaCategoria(params: any){
        const { id } = params;
        const umaCategoria = await Categoria.findByPk(id);
        return umaCategoria;
    }
}