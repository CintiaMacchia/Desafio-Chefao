<<<<<<< HEAD:backend/src/domain/endereco/services/EnderecoService.ts
import { endereco } from '../models/endereco';
import { Request, Response } from 'express';
=======
import { endereco } from "../models/endereco";
import * as dotenv from "dotenv";
dotenv.config();
>>>>>>> 405e2939819e3de9eaa95b0212872cacf98ac909:src/domain/endereco/services/EnderecoService.ts

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
<<<<<<< HEAD:backend/src/domain/endereco/services/EnderecoService.ts
        const alterarEndereco = await endereco.findByPk(id);
        return alterarEndereco
=======
        const Endereco = await endereco.findByPk(id);
        return Endereco
>>>>>>> 405e2939819e3de9eaa95b0212872cacf98ac909:src/domain/endereco/services/EnderecoService.ts
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
<<<<<<< HEAD:backend/src/domain/endereco/services/EnderecoService.ts
=======
        
>>>>>>> 405e2939819e3de9eaa95b0212872cacf98ac909:src/domain/endereco/services/EnderecoService.ts
        const listarEnderecos = await endereco.findAll();
        return listarEnderecos;
    }

    async umEndereco(params: any) {
        const { id } = params;
        const enderecoUnico = await endereco.findByPk(id);
        return enderecoUnico
    }

};