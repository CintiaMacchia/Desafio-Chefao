"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Categoria = void 0;
const database_1 = __importDefault(require("../../../shared/infrastructure/database"));
const types_1 = require("sequelize/types");
exports.Categoria = database_1.default.define("categoria", {
    id: {
        type: types_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    categoria: {
        type: types_1.DataTypes.STRING,
    },
    createdAt: {
        type: types_1.DataTypes.DATE,
    },
    updatedAt: {
        type: types_1.DataTypes.DATE,
    },
}, {
    tablename: "categoria"
});
