const create = require('./produtos/create')
const update = require('./produtos/update')
const getOne = require('./produtos/getOne')
const destroy= require( './produtos/destroy')

export const ProdutoValidation = {
    create,
    update,
    getOne,
    destroy,
};