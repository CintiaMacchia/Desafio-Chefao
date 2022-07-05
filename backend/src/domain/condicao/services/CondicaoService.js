import condicao from '../models/condicao';

export class CondicaoService {
    async cadastrarCondicao(data) {
        const novaCondicao = await condicao.create({
            ...data,
        })
        return novaCondicao;
    }

    async alterarCondicao() {

    }

    async excluirCondicao() {

    }



}