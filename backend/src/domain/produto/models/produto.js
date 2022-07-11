const db = require("../../../shared/infrastructure/database")
const { DataTypes } = require("sequelize")

const Produtos = db.define(
    "produtos", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        nome: {
            type: DataTypes.STRING,
        },
        descricao: {
            type: DataTypes.STRING,
        },
        valor: {
            type: DataTypes.DOUBLE,
        },
        foto: {
            type: DataTypes.STRING,
        },
        categoria_id: {
            type: DataTypes.INTEGER,
            references: { model: "categoria", key: "categoria_id" },
        },
        usuario_id: {
            type: DataTypes.INTEGER,
            references: { model: "usuarios", key: "usuario_id" },
        },
        condicao_id: {
            type: DataTypes.INTEGER,
            references: { model: "condicao", key: "condicao_id" },
        },
        createdAt: {
            type: DataTypes.DATE,
        },
        updatedAt: {
            type: DataTypes.DATE,
        },
    }, {
        tablename: "produtos",
    }
);

module.exports = Produtos