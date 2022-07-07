import { Request, Response } from 'express';
import { enderecoService } from '../services';

//const endereco = require("../model");

export const EnderecoController = {
    async create(req, res) {
        try {
            const novoEndereco = await enderecoService.cadastrarEndereco(req.body);
            return res.status(201).json(novoEndereco);
        } catch (error) {
            return res.status(500).json(error);
        };
    },

    async update(req, res) {
        try {
            const alterarEndereco = await enderecoService.alterarEndereco(req.body, req.params, req.auth);
            return res.status(200).json(alterarEndereco);
        } catch (error) {
            return res.status(500).json(error);
        }
    },

    async delete(req, res) {
        try {
            const deletarEndereco = await enderecoService.excluirEndereco(req.params, req.auth);
            return res.sendStatus(204).json(deletarEndereco);;
        } catch (error) {
            return res.status(500).json(error);
        }
    },

    async getAll(req, res) {
        try {
            const endereco = await enderecoService.listarEnderecos();
            return res.json(endereco);
        } catch (error) {
            return res.status(500).json(error);
        }
    },

    async getOne(req, res) {
        try {
            const endereco = await enderecoService.umEndereco(req.params);
            return res.json(endereco);
        } catch (error) {
            return res.status(500).json(error);
        }
    }

};