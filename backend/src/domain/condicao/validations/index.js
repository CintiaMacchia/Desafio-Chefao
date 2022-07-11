const { create } = require('./condicao/create')
const { update } = require('./condicao/update')
const { getOne } = require('./condicao/getOne')
const { destroy } = require('./condicao/destroy')


module.exports = CondicaoValidation = {
    create,
    update,
    getOne,
    destroy,
}