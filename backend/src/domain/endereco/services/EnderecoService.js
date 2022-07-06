import endereco from '../models/endereco';

export class EnderecoService {
    async cadastrarEndereco(data, params, auth) {
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

    async alterarEndereco(data, params, auth) {
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
        const endereco = await endereco.findByPk(id);
        return endereco
    }

    async excluirEndereco(params, auth) {
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

    async umEndereco(params) {
        const { id } = params;
        const enderecoUnico = await endereco.findByPk(id);
        return enderecoUnico
    }

};