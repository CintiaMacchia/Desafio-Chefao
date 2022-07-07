import { Condicao } from "../models/condicao";

export class CondicaoService {
    async cadastrarCondicao(data: any) {
        const novaCondicao = await Condicao.create({
            ...data,
        })
        return novaCondicao;
    }

    async alterarCondicao(data: any, params: any, auth: any) {
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

    }

    async excluirCondicao(params: any, auth: any) {
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
    }

    async todasCondicoes() {
        const todasCondicoes = await Condicao.findAll();
        return todasCondicoes;
    }

    async umaCondicao(params: any) {
        const { id } = params;
        const umaCondicao = await Condicao.findByPk(id);
        return umaCondicao
    }

};