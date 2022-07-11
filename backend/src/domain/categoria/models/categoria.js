const db = require("../../../shared/infrastructure/database")
const { DataTypes } = require('sequelize');

module.exports = Categoria = db.define(
    "categoria", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        categoria: {
            type: DataTypes.STRING,
        },
        createdAt: {
            type: DataTypes.DATE,
        },
        updatedAt: {
            type: DataTypes.DATE,
        },
    }, {
        tablename: "categoria"
    }
)