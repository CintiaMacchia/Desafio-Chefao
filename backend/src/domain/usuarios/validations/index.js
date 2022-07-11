const create = require("./usuarios/create")
const getOne = require("./usuarios/getOne")
const destroy = require("./usuarios/destroy")
const update = require("./usuarios/update")

module.exports = UsuarioValidation = {
    create,
    getOne,
    destroy,
    update,
};