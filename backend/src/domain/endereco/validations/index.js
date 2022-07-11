const { create } = require('./endereco/create');
const { update } = require('./endereco/update');
const { getOne } = require('./endereco/getOne');
const { destroy } = require('./endereco/destroy');
module.exports = EnderecoValidation = {
    create,
    update,
    getOne,
    destroy,
};