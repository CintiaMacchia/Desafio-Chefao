import { Request, Response } from 'express';
import { enderecoService } from '../services';
<<<<<<< HEAD:backend/src/domain/endereco/controllers/endereco.controller.ts
//import { Endereco } from '../models';
import { endereco } from '../models/endereco';
=======
//import { endereco } from '..models/endereco'
>>>>>>> 405e2939819e3de9eaa95b0212872cacf98ac909:src/domain/endereco/controllers/enderecoController.ts

interface AuthRequest extends Request{ auth: any } 

export const EnderecoController = {
    async create(req:AuthRequest, res: Response) {
        try {
<<<<<<< HEAD:backend/src/domain/endereco/controllers/endereco.controller.ts
            const novoEndereco = await enderecoService.cadastrarEndereco(req.body, req.params);
=======
            const novoEndereco = await enderecoService.cadastrarEndereco(req.body, req.params, req.auth);
>>>>>>> 405e2939819e3de9eaa95b0212872cacf98ac909:src/domain/endereco/controllers/enderecoController.ts
            return res.status(201).json(novoEndereco);
        } catch (error) {
            return res.status(500).json(error);
        };
    },

    async update(req:AuthRequest, res: Response) {
        try {
<<<<<<< HEAD:backend/src/domain/endereco/controllers/endereco.controller.ts
            const alterarEndereco = await enderecoService.alterarEndereco(req.body, req.params);
=======
            const alterarEndereco = await enderecoService.alterarEndereco(req.body, req.params, req.auth);
>>>>>>> 405e2939819e3de9eaa95b0212872cacf98ac909:src/domain/endereco/controllers/enderecoController.ts
            return res.status(200).json(alterarEndereco);
            
        } catch (error) {
            return res.status(500).json(error);
        }
    },

<<<<<<< HEAD:backend/src/domain/endereco/controllers/endereco.controller.ts
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
            const { id } = req.params;

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
=======
    async delete(req:AuthRequest, res: Response) {
        try {
            const deletarEndereco = await enderecoService.excluirEndereco(req.params, req.auth);
            return res.status(204).json(deletarEndereco)
>>>>>>> 405e2939819e3de9eaa95b0212872cacf98ac909:src/domain/endereco/controllers/enderecoController.ts
        } catch (error) {
            return res.status(500).json({message:"Falha ao deletar o endereco"})
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