const { create } = require('./categoria/create')
const { update } = require('./categoria/update')
const { getOne } = require('./categoria/getOne')
const { destroy } = require('./categoria/destroy')



module.exports = CategoriaValidation = {
    create,
    getOne,
    destroy,
    update,
};