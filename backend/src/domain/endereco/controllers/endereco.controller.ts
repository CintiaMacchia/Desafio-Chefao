import { Request, Response } from 'express';
import { enderecoService } from '../services';
import { Endereco } from '../models';

//const endereco = require("../model");
interface AuthRequest extends Request{
 auth: any
}

export const EnderecoController = {
    async create(req:AuthRequest, res: Response) {
        try {
            const novoEndereco = await enderecoService.cadastrarEndereco(req.body, req.params, req.auth);
            return res.status(201).json(novoEndereco);
        } catch (error) {
            return res.status(500).json(error);
        };
    },

    async update(req:AuthRequest, res: Response) {
        try {
            const alterarEndereco = await enderecoService.alterarEndereco(req.body, req.params, req.auth);
            return res.status(200).json(alterarEndereco);
        } catch (error) {
            return res.status(500).json(error);
        }
    },

    async delete(req:AuthRequest, res: Response) {
        try {
            const deletarEndereco = await enderecoService.excluirEndereco(req.params, req.auth);
            return res.status(204).json(deletarEndereco)
        } catch (error) {
            return res.status(500).json(error);
        }
    },

    async getAll(req: Request, res: Response) {
        try {
            const endereco = await enderecoService.listarEnderecos();
            return res.json(endereco);
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