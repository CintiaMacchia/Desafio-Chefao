const { endereco } = require('../models/endereco');

require("dotenv").config();


module.exports = EnderecoService = {
    async cadastrarEndereco(data, params) {
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
    },

    // async alterarEndereco(data:any, params: any) {
    //     const { id, usuario_id,  } = params;
    //     const payloadUpdate = {};

    //     if (id != id) {
    //         return
    //     }
    //     Object.assign(payloadUpdate, data);

    //     await endereco.update({
    //         ...payloadUpdate,
    //     }, {
    //         where: {
    //             id,

    //         }

    //     })
    //     const Endereco = await endereco.findByPk(id);
    //     return Endereco

    // }

    async excluirEndereco(params) {
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
    },
    async listarEnderecos() {

        const listarEnderecos = await endereco.findAll();
        return listarEnderecos;
    },

    async umEndereco(params) {
        const { id } = params;
        const enderecoUnico = await endereco.findByPk(id);
        return enderecoUnico
    }

};