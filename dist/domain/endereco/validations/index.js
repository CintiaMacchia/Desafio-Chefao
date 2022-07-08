"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnderecoValidation = void 0;
const create_1 = require("./endereco/create");
const update_1 = require("./endereco/update");
const getOne_1 = require("./endereco/getOne");
const destroy_1 = require("./endereco/destroy");
exports.EnderecoValidation = {
    create: create_1.create,
    update: update_1.update,
    getOne: getOne_1.getOne,
    destroy: destroy_1.destroy,
};
