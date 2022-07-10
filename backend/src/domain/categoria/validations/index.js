const { create } = require('./categoria/create')
const { update } = require('./categoria/update')
const { getOne } = require('./categoria/getOne')
const { destroy } = require('./categoria/destroy')



export const CategoriaValidation = {
    create,
    getOne,
    destroy,
    update,
};