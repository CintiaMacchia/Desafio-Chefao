import { endereco } from "../models/endereco";
import * as dotenv from "dotenv";
dotenv.config();

export class EnderecoService {
    async cadastrarEndereco(data: any, params: any, auth: any) {
        const { usuario_id } = params;
        if (auth.usuario_id != usuario_id) {
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

    async alterarEndereco(data:any, params: any, auth: any) {
        const { id } = params;
        const payloadUpdate = {};

        if (auth.id != id) {
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
        const Endereco = await endereco.findByPk(id);
        return Endereco
    }

    async excluirEndereco(params: any, auth: any) {
        const { id } = params;

        if (auth.id != id) {
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