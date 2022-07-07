import condicao from '../models/condicao';

export class CondicaoService {
    async cadastrarCondicao(data) {
        const novaCondicao = await condicao.create({
            ...data,
        })
        return novaCondicao;
    }

    async alterarCondicao(data, params, auth) {
        const { id } = params;
        const payloadUpdate = {};

        if (auth.id != id) {
            return
        }

        Object.assign(payloadUpdate, data);

        await condicao.update({
            ...payloadUpdate,
        }, {
            where: {
                id,
            }
        })
        const condicao = await condicao.findByPk(id);
        return condicao

    }

    async excluirCondicao(params, auth) {
        const { id } = params;

        if (auth.id != id) {
            return
        }

        await condicao.destroy({
            where: {
                id,
            }
        });
        return
    }

    async todasCondicoes() {
        const todasCondicoes = await condicao.findAll();
        return todasCondicoes;
    }

    async umaCondicao(params) {
        const { id } = params;
        const umaCondicao = await condicao.findByPk(id);
        return umaCondicao
    }

};