"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.endereco = void 0;
const database_1 = __importDefault(require("../../../shared/infrastructure/database"));
const sequelize_1 = require("sequelize");
exports.endereco = database_1.default.define("endereco", { id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    rua: {
        type: sequelize_1.DataTypes.STRING,
    },
    numero: {
        type: sequelize_1.DataTypes.INTEGER,
    },
    complemento: {
        type: sequelize_1.DataTypes.STRING,
    },
    cidade: {
        type: sequelize_1.DataTypes.STRING,
    },
    estado: {
        type: sequelize_1.DataTypes.STRING,
    },
    CEP: {
        type: sequelize_1.DataTypes.STRING,
    },
    usuario_id: {
        type: sequelize_1.DataTypes.INTEGER,
        references: { model: 'usuario',
            key: "id" },
    },
    createdAt: {
        type: sequelize_1.DataTypes.DATE,
    },
    updatedAt: {
        type: sequelize_1.DataTypes.DATE,
    },
}, {
    tablename: "endereco"
});
