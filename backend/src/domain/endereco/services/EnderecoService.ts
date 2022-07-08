import { endereco } from '../models/endereco';
import { Request, Response } from 'express';

export class EnderecoService {
    async cadastrarEndereco(data: any, params: any) {
        const { usuario_id } = params;
        if (!usuario_id === usuario_id) {
            return
        }

        const novoEndereco = await endereco.create({
            ...data,
            where: {
                usuario_id
            }
        });
        return novoEndereco;
    }

    async alterarEndereco(data:any, params: any) {
        const { id } = params;
        const payloadUpdate = {};

        if (id != id) {
            return
        }
        Object.assign(payloadUpdate, data);

        await endereco.update({
            ...payloadUpdate,
        }, {
            where: {
                id,

            }

        })
        const alterarEndereco = await endereco.findByPk(id);
        return alterarEndereco
    }

    async excluirEndereco(params: any,) {
        const { id } = params;

        if (id != id) {
            return
        }

        await endereco.destroy({
            where: {
                id,
            },
        });
        return
    }
  


    async listarEnderecos() {
        const listarEnderecos = await endereco.findAll();
        return listarEnderecos;
    }

    async umEndereco(params: any) {
        const { id } = params;
        const enderecoUnico = await endereco.findByPk(id);
        return enderecoUnico
    }

};