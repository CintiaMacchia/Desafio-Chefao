import { Categoria } from "../models/categoria";
//import bcrypt from "bcrypt";
//import jwt from 'jsonwebtoken';
import * as dotenv from "dotenv";
dotenv.config();

export class CategoriaService{
    async cadatrarCategoria(data){
        const novaCategoria = await Categoria.create({
            ...data
        });
        return novaCategoria;
    }

    async updateCategoria(data, params){
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

    async excluirCategoria(params, auth){
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

    async umaCategoria(params){
        const { id } = params;
        const umaCategoria = await Categoria.findByPk(id);
        return umaCategoria;
    }
}