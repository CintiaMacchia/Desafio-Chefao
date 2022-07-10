const { create } = require ('./endereco/create');
const { update } =require ('./endereco/update');
const { getOne } =require ('./endereco/getOne');
const { destroy } = require ('./endereco/destroy');

export const EnderecoValidation = {
    create,
    update,
    getOne,
    destroy,
};