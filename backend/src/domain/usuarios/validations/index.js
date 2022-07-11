const create = require("./usuarios/create")
const getOne = require("./usuarios/getOne")
const destroy = require("./usuarios/destroy")
const update = require("./usuarios/update")

const UsuarioValidation = {
    create,
    getOne,
    destroy,
    update,
};

module.exports = UsuarioValidation