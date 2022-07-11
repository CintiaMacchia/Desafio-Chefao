<<<<<<< HEAD
const { create } = require('./produtos/create')
const { update } = require('./produtos/update')
const { getOne } = require('./produtos/getOne')
const { destroy } = require('./produtos/destroy')


=======
const create = require('./produtos/create')
const update = require('./produtos/update')
const getOne = require('./produtos/getOne')
const destroy= require( './produtos/destroy')
>>>>>>> 3d12aceeec85c81cfe66b7b13c9dcc754986a2ff

export const ProdutoValidation = {
    create,
    update,
    getOne,
    destroy,
};