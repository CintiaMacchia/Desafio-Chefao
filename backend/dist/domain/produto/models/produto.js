"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Produtos = void 0;
const database_1 = __importDefault(require("../../../shared/infrastructure/database"));
const sequelize_1 = require("sequelize");
exports.Produtos = database_1.default.define("produtos", {
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    nome: {
        type: sequelize_1.DataTypes.STRING,
    },
    descricao: {
        type: sequelize_1.DataTypes.STRING,
    },
    valor: {
        type: sequelize_1.DataTypes.DOUBLE,
    },
    foto: {
        type: sequelize_1.DataTypes.STRING,
    },
    categoria_id: {
        type: sequelize_1.DataTypes.INTEGER,
        references: { model: "categoria", key: "categoria_id" },
    },
    usuario_id: {
        type: sequelize_1.DataTypes.INTEGER,
        references: { model: "usuarios", key: "usuario_id" },
    },
    condicao_id: {
        type: sequelize_1.DataTypes.INTEGER,
        references: { model: "condicao", key: "condicao_id" },
    },
    createdAt: {
        type: sequelize_1.DataTypes.DATE,
    },
    updatedAt: {
        type: sequelize_1.DataTypes.DATE,
    },
}, {
    tablename: "produtos",
});
