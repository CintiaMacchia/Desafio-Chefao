"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoriaValidation = void 0;
const create_1 = require("./categoria/create");
const getOne_1 = require("./categoria/getOne");
const destroy_1 = require("./categoria/destroy");
const update_1 = require("./categoria/update");
exports.CategoriaValidation = {
    create: create_1.create,
    getOne: getOne_1.getOne,
    destroy: destroy_1.destroy,
    update: update_1.update,
};
