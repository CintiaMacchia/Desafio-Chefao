"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsuarioValidation = void 0;
const create_1 = require("./usuarios/create");
const getOne_1 = require("./usuarios/getOne");
const destroy_1 = require("./usuarios/destroy");
const update_1 = require("./usuarios/update");
exports.UsuarioValidation = {
    create: create_1.create,
    getOne: getOne_1.getOne,
    destroy: destroy_1.destroy,
    update: update_1.update,
};
