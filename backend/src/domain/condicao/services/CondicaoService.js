const { Condicao } = require('../models/condicao')

module.exports = CondicaoService = {
    async cadastrarCondicao(data) {
        const novaCondicao = await Condicao.create({
            ...data,
        })
        return novaCondicao;
    },

    async alterarCondicao(data, params, auth) {
        const { id } = params;
        const payloadUpdate = {};

        if (auth.id != id) {
            return
        }

        Object.assign(payloadUpdate, data);

        await Condicao.update({
            ...payloadUpdate,
        }, {
            where: {
                id,
            }
        })
        const condicao = await Condicao.findByPk(id);
        return condicao

    },

    async excluirCondicao(params, auth) {
        const { id } = params;

        if (auth.id != id) {
            return
        }

        await Condicao.destroy({
            where: {
                id,
            }
        });
        return
    },

    async todasCondicoes() {

        const todasAsCondicoes = await Condicao.findAll();
        return todasAsCondicoes;
    },

    async umaCondicao(params) {
        const { id } = params;
        const umaCondicao = await Condicao.findByPk(id);
        return umaCondicao
    },

}