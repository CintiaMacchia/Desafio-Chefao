"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CondicaoValidation = void 0;
const create_1 = require("./condicao/create");
const update_1 = require("./condicao/update");
const getOne_1 = require("./condicao/getOne");
const destroy_1 = require("./condicao/destroy");
exports.CondicaoValidation = {
    create: create_1.create,
    update: update_1.update,
    getOne: getOne_1.getOne,
    destroy: destroy_1.destroy,
};
