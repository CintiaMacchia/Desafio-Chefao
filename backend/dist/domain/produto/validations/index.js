"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProdutoValidation = void 0;
const create_1 = require("./produtos/create");
const update_1 = require("./produtos/update");
const getOne_1 = require("./produtos/getOne");
const destroy_1 = require("./produtos/destroy");
exports.ProdutoValidation = {
    create: create_1.create,
    update: update_1.update,
    getOne: getOne_1.getOne,
    destroy: destroy_1.destroy,
};
