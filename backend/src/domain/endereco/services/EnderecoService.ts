import { Endereco } from '../models/index';
import * as dotenv from "dotenv";
dotenv.config();

export class EnderecoService {
    async cadastrarEndereco(data: any, params: any, auth: any) {
        const { usuario_id } = params;
        if (auth.usuario_id != usuario_id) {
            return
        }

        const novoEndereco = await Endereco.create({
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

        await Endereco.update({
            ...payloadUpdate,
        }, {
            where: {
                id,

            }

        })
        const endereco = await Endereco.findByPk(id);
        return endereco
    }

    async excluirEndereco(params: any, auth: any) {
        const { id } = params;

        if (auth.id != id) {
            return
        }

        await Endereco.destroy({
            where: {
                id,
            },
        });
        return
    }

    async listarEnderecos() {
        console.log("Aqui2")
        const listarEnderecos = await Endereco.findAll();
        return listarEnderecos;
    }

    async umEndereco(params: any) {
        const { id } = params;
        const enderecoUnico = await Endereco.findByPk(id);
        return enderecoUnico
    }

};