import { Request, Response } from "express"
import { condicaoService } from '../services'
import { Condicao } from '../models/condicao'

export const CondicaoController = {
    async create(req: Request, res: Response) {
        try {
            const novaCondicao = await condicaoService.cadastrarCondicao(req.body);
            return res.status(201).json(novaCondicao);
        } catch (error) {
            return res.status(500).json(error);
        }
    },


    async update(req: Request, res: Response) {
        try {
            const updateCondicao = await condicaoService.alterarCondicao(req.body, req.params);
            return res.status(200).json(updateCondicao);
        } catch (error) {
            return res.status(500).json(error);
        }
    },

    // async delete(req: Request, res: Response) {
    //     try {
    //         const deletarCondicao = await condicaoService.excluirCondicao(req.params);
    //         return res.sendStatus(204).json(deletarCondicao)
    //     } catch (error) {
    //         return res.status(500).json(error);
    //     }
    // },

    async delete(req: Request, res: Response) {
        try {
          const { id } = req.params;
    
          const existIdUser = await Condicao.count({
            where: {
              id: id
            }
          });
    
          if (!existIdUser) {
            return res.status(400).json('Usuário não encontrado');
          }
    
          await Condicao.destroy({
            where: {
              id: id
            }
          });
    
          res.status(201).json('Usuário deletado com sucesso');
        } 
        catch (error) {
          res.json('Falha ao deletar usuário')
          console.error(error);
        }
      },
      
    async getAll(req: Request, res: Response) {
        try {
            const condicao = await condicaoService.todasCondicoes();
            return res.json(condicao);
        } catch (error) {
            return res.status(500).json(error);
        }
    },

    async getOne(req: Request, res: Response) {
        try {
            const condicao = await condicaoService.umaCondicao(req.params);
            return res.json(condicao);
        } catch (error) {
            return res.status(500).json(error);
        }
    }
};