import { Request, Response } from 'express';
import { enderecoService } from '../services';

import { endereco } from '../models/endereco';
//import { endereco } from '..models/endereco'

//interface Request, res: Response extends Request{ auth: any } 

export const EnderecoController = {
    async create(req:Request, res: Response) {
        try {
           const novoEndereco = await enderecoService.cadastrarEndereco(req.body, req.params);
            return res.status(201).json(novoEndereco);
        } catch (error) {
            return res.status(500).json(error);
        };
    },

    async update(req:Request, res: Response) {
        try {
            const alterarEndereco = await enderecoService.alterarEndereco(req.body, req.params);
            return res.status(200).json(alterarEndereco);
            
        } catch (error) {
            return res.status(500).json(error);
        }
    },


    // async delete(req:Request, res: Response) {
    //     try {
    //         const deletarEndereco = await enderecoService.excluirEndereco(req.params, req.body.auth);
    //         return res.status(204).json(deletarEndereco)
    //     } catch (error) {
    //         return res.status(500).json(error);
    //     }
    // },

    async delete(req:Request, res:Response){
        try {
            const { id} = req.params;

            const existeId = await endereco.count({
                where: {
                    id: id,
                    
                }
            });
            if(!existeId){
                return res.status(400).json({message:'Endereco não encontrado'})
            }
            
            await endereco.destroy({
                where: {
                    id: id
                }
            });

            return res.status(204).json({message:'Endereco deletado'});
        } catch (error) {
            return res.status(500).json(error);
        }
    },
  

    async getAll(req: Request, res: Response) {
        try {
            //console.log(req)
            const enderecos = await enderecoService.listarEnderecos();
            return res.json(enderecos);
        } catch (error) {
            return res.status(500).json(error);
        }
    },

    async getOne(req: Request, res: Response) {
        try {
            const endereco = await enderecoService.umEndereco(req.params);
            return res.json(endereco);
        } catch (error) {
            return res.status(500).json(error);
        }
    }

};